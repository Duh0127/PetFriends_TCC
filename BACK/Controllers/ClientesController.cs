using System.Net;
using System.Security.Cryptography;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;

namespace ApiTcc.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ClientesController : ControllerBase
    {

        private readonly DataContext _context;

        private readonly IConfiguration _configuration;

        public ClientesController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        private void CriarPasswordHash(string password, out byte[] hash, out byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                salt = hmac.Key;
                hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> ClienteExistente(string email, string nome)
        {
            if (await _context.Clientes.AnyAsync(x => x.emailCadCliente.ToLower() == email.ToLower() && x.nomeCadCliente.ToLower() == nome.ToLower()))
            {
                return true;
            }
            return false;
        }

        private bool VerificarPasswordHash(string password, byte[] hash, byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(salt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != hash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        private string CriarToken(Cliente cliente)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, cliente.clienteId.ToString()),
                new Claim(ClaimTypes.Name, cliente.nomeCadCliente),
                new Claim(ClaimTypes.Email, cliente.emailCadCliente),
                new Claim(ClaimTypes.MobilePhone, cliente.telCadCliente),
                new Claim(ClaimTypes.Role, cliente.Perfil)
            };
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes(_configuration.GetSection("ConfiguracaoToken:Chave").Value));
            SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }





        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Cliente> lista = await _context.Clientes.ToListAsync();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByUser")]
        
        public async Task<IActionResult> GetByUserAsync()
        {
            try
            {
                int id = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

                List<Cliente> lista = await _context.Clientes
                    .Where(a => a.clienteId == id).Include(p => p.Pedido).ToListAsync();

                return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            try
            {
                Cliente c = await _context.Clientes
                    .FirstOrDefaultAsync(cBusca => cBusca.clienteId == id);

                return Ok(c);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        // [HttpPost]
        // public async Task<IActionResult> Add(Cliente novoCliente)
        // {
        //     try
        //     {
        //         if (novoCliente.nome == "" && novoCliente.cpf == 0)
        //         {
        //             throw new Exception("Campos Nome e CPF não podem estar vazios!");
        //         }
        //         await _context.Clientes.AddAsync(novoCliente);
        //         await _context.SaveChangesAsync();

        //         return Ok(novoCliente.clienteId);
        //     }
        //     catch (Exception ex)
        //     {

        //         return BadRequest(ex.Message);
        //     }
        // }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Cliente novoCliente)
        {
            try
            {
                if (novoCliente.nomeCadCliente == "" )
                {
                    throw new Exception("Campos Nome e CPF não podem estar vazios!");
                }
                _context.Clientes.Update(novoCliente);
                int linhasAfetadas = await _context.SaveChangesAsync();

                return Ok(linhasAfetadas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                Cliente cRemover = await _context.Clientes
                    .FirstOrDefaultAsync(c => c.clienteId == id);

                _context.Clientes.Remove(cRemover);
                int linhasAfetadas = await _context.SaveChangesAsync();

                return Ok(linhasAfetadas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpPost("Registrar")]

        public async Task<IActionResult> RegistrarCliente(Cliente cliente)
        {
            try
            {
                if (await ClienteExistente(cliente.emailCadCliente, cliente.nomeCadCliente))
                    throw new SystemException("Email ou Nome de usuário já existe");

                CriarPasswordHash(cliente.senhaCadCliente, out byte[] hash, out byte[] salt);
                cliente.senhaCadCliente = string.Empty;
                cliente.PasswordHash = hash;
                cliente.PasswordSalt = salt;
                await _context.Clientes.AddAsync(cliente);
                await _context.SaveChangesAsync();

                return Ok(cliente.clienteId);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpPost("Autenticar")]
        public async Task<IActionResult> AutenticarCliente(Cliente credenciais)
        {
            try
            {
                Cliente cliente = await _context.Clientes
                    .FirstOrDefaultAsync(x => x.emailCadCliente.ToLower().Equals(credenciais.emailCadCliente.ToLower()));

                if (cliente == null)
                {
                    throw new SystemException("Cliente não encontrado.");
                }
                else if (!VerificarPasswordHash(credenciais.senhaCadCliente, cliente.PasswordHash, cliente.PasswordSalt))
                {
                    throw new System.Exception("Usuario ou senha incorretos.");
                }
                else
                {
                    _context.Clientes.Update(cliente);
                    await _context.SaveChangesAsync();

                    var token = CriarToken(cliente);

                    return Ok(token);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        
    }
}
