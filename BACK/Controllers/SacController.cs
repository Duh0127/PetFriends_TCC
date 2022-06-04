using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using ApiTcc.Models.Enuns;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    //[Authorize(Roles = "Associado")]
    [ApiController]
    [Route("[controller]")]
    public class SacController : ControllerBase
    {

        private readonly DataContext _context;

        private readonly IHttpContextAccessor _httpContextAccessor;

        public SacController(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        private int ObterUsuarioId()
        {
            return int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        }

        private string ObterPerfilUsuario()
        {
            return _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Role);
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Produto> lista = await _context.Produtos.OrderByDescending(p => p.produtoId).ToListAsync();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            try
            {
                Produto pd = await _context.Produtos
                    .Include(a => a.Associado).FirstOrDefaultAsync(pdBusca => pdBusca.produtoId == id);

                return Ok(pd);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }           
        }

        // [HttpGet("GetByUser")]
        
        // public async Task<IActionResult> GetByUserAsync()
        // {
        //     try
        //     {
        //         int id = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

        //         List<Produto> lista = await _context.Produtos
        //             .Where(a => a.associadoId == id).ToListAsync();

        //         return Ok(lista);
        //     }
        //     catch (System.Exception ex)
        //     {
        //         return BadRequest(ex.Message);
        //     }
        // }



        [HttpPost]
        public async Task<IActionResult> Add(Sac novoSac)
        {

             try
             {
                
                // novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == ObterUsuarioId());


                // int associadoId = int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                // novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == associadoId);
                

                //INSERIR FORNECENDO ID DO USUARIO
                //  Associado a = await _context.Associados
                //      .FirstOrDefaultAsync(a => a.associadoId == novoProduto.associadoId);

                //  if(a == null)
                //      throw new System.Exception("Não existe Associado com o Id Informado.");
                
                 await _context.Sac.AddAsync(novoSac);
                 await _context.SaveChangesAsync();

                 return Ok(novoSac.sacId);
             }
                catch (Exception ex)
                {
                
                 return BadRequest(ex.InnerException);
                }
        }

        // [HttpPut]
        // public async Task<IActionResult> Update(Produto p)
        // {
        //     Produtos produtosAlterado = persoagens.Find(produto => produto.Id)
        // }

         [HttpPut]
         public async Task<IActionResult> Update(Produto novoProduto)
         {
             try
             {
                 if (novoProduto.nomeProduto == "" && novoProduto.precoProduto == 0)
                 {
                     throw new Exception("Campos Nome e Preço não podem estar vazios!");
                }

                 novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == ObterUsuarioId());
                 // int associadoId = int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                 // novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == associadoId);
                
                 _context.Produtos.Update(novoProduto);
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
               Produto pdRemover = await _context.Produtos
                .FirstOrDefaultAsync(pd => pd.produtoId == id);

                _context.Produtos.Remove(pdRemover);
                int linhasAfestadas = await _context.SaveChangesAsync();

                return Ok(linhasAfestadas);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }




    }
}