using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ApiTcc.Models.Enuns;
using System.Linq;
using ApiTcc.Data;
using System.Threading.Tasks;
using System;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace ApiTcc.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AssociadosController : ControllerBase
    {
        private readonly DataContext _context;

        private readonly IConfiguration _configuration;

        public AssociadosController(DataContext context, IConfiguration configuration)
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

         public async Task<bool> AssociadoExistente(string email, string nome)
        {
            if (await _context.Associados.AnyAsync(x => x.emailCadAssociado.ToLower() == email.ToLower() && x.nomeCadAssociado.ToLower() == nome.ToLower()))
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

        private string CriarToken(Associado associado)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, associado.associadoId.ToString()),
                new Claim(ClaimTypes.Name, associado.emailCadAssociado),
                new Claim(ClaimTypes.Role, associado.Perfil)
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
                List<Associado> lista = await _context.Associados.ToListAsync();
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

                List<Associado> lista = await _context.Associados
                    .Where(a => a.associadoId == id).Include(p => p.Produtos).ToListAsync();

                return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        // [HttpGet("{id}")]
        // public async Task<IActionResult> GetSingle(int id)
        // {
            
        //     try
        //      {
        //          Associado a = await _context.Associados
        //              .Include(pd => pd.Produtos).FirstOrDefaultAsync(aBusca => aBusca.associadoId == id);

        //          return Ok(a);

        //      }
        //      catch (System.Exception ex)
        //      {
        //          return BadRequest(ex.Message);
        //      }
            
            
        //     //  try
        //     //  {
        //     //      Associado a = await _context.Associados
        //     //          .FirstOrDefaultAsync(aBusca => aBusca.associadoId == id);

        //     //      return Ok(a);
        //     //  }
        //     //  catch (Exception ex)
        //     //  {
                
        //     //      return BadRequest(ex.Message);
        //     //  }           
        // }


          [HttpPut]
          public async Task<IActionResult> Update(Associado novoAssociado)
          {
              try
               {
                   if (novoAssociado.nomeCadAssociado == "")
                   {
                       throw new Exception("Nome não pode estar vazio!");
                   }
                   _context.Associados.Update(novoAssociado);
                   int linhasAfestadas = await _context.SaveChangesAsync();

                   return Ok(linhasAfestadas);
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
               Associado aRemover = await _context.Associados
                .FirstOrDefaultAsync(a => a.associadoId == id);

                _context.Associados.Remove(aRemover);
                int linhasAfestadas = await _context.SaveChangesAsync();

                return Ok(linhasAfestadas);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost("Registrar")]

        public async Task<IActionResult> RegistrarAssociado(Associado associado)
        {
            try
            {
                if (await AssociadoExistente(associado.emailCadAssociado, associado.nomeCadAssociado))
                    throw new SystemException("Email ou Nome de usuário já existe");

                CriarPasswordHash(associado.senhaCadAssociado, out byte[] hash, out byte[] salt);
                associado.senhaCadAssociado = string.Empty;
                associado.PasswordHash = hash;
                associado.PasswordSalt = salt;
                await _context.Associados.AddAsync(associado);
                await _context.SaveChangesAsync();

                return Ok(associado.associadoId);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpPost("Autenticar")]
        public async Task<IActionResult> AutenticarAssociado(Associado credenciais)
        {
            try
            {
                Associado associado = await _context.Associados
                    .FirstOrDefaultAsync(x => x.emailCadAssociado.ToLower().Equals(credenciais.emailCadAssociado.ToLower()));

                if (associado == null)
                {
                    throw new SystemException("Associado não encontrado.");
                }
                else if (!VerificarPasswordHash(credenciais.senhaCadAssociado, associado.PasswordHash, associado.PasswordSalt))
                {
                    throw new System.Exception("Email ou senha incorretos.");
                }
                else
                {
                
                    _context.Associados.Update(associado);
                    await _context.SaveChangesAsync();

                
                    return Ok(CriarToken(associado));
                    
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

            
    }
}