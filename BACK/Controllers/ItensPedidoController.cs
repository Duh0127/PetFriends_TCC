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
    public class ItensPedidoController : ControllerBase
    {

        private readonly DataContext _context;

        private readonly IHttpContextAccessor _httpContextAccessor;

        public ItensPedidoController(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<bool> ProdutoExistente (string codigoProduto)
        {
            if(await _context.Produtos.AnyAsync(x => x.codigoProduto.ToLower() == codigoProduto.ToLower()))
            {
                return true;
            }
            return false;
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
                List<ItemPedido> lista = await _context.ItensPedido.ToListAsync();
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

        [HttpGet("GetByUser")]
        
        public async Task<IActionResult> GetByUserAsync()
        {
            try
            {
                int id = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

                List<ItemPedido> lista = await _context.ItensPedido
                    .Where(c => c.clienteId == id).ToListAsync();

                return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // [HttpGet("GetByPerfil")]
        
        // public async Task<IActionResult> GetByPerfilAsync()
        // {
        //     try
        //     {
        //         List<Produto> lista = new List<Produto>();

        //         if(ObterPerfilUsuario() == "Admin")
        //             lista = await _context.Produtos.ToListAsync();
        //         else
        //         {
        //             lista = await _context.Produtos.Where(p => p.Associado.associadoId == ObterUsuarioId()).ToListAsync();
        //         }

        //         return Ok(lista);
        //     }
        //     catch (System.Exception ex)
        //     {
        //         return BadRequest(ex.Message);
        //     }
        // }


        [HttpPost]
        public async Task<IActionResult> Add(ItemPedido novoItemPedido)
        {
            try
             {
                 
                
                novoItemPedido.Cliente = _context.Clientes.FirstOrDefault(cBusca => cBusca.clienteId == ObterUsuarioId());

                // int associadoId = int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                // novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == associadoId);
                
                //INSERIR FORNECENDO ID DO ITENS PEDIDO
                Produto p = await _context.Produtos
                       .FirstOrDefaultAsync(p => p.produtoId == novoItemPedido.produtoId);


                //  if(a == null)
                //      throw new System.Exception("Não existe Associado com o Id Informado.");
                
                //novoItemPedido.dataPedido = System.DateTime.Now;
                await _context.ItensPedido.AddAsync(novoItemPedido);
                await _context.SaveChangesAsync();

                 return Ok(novoItemPedido.itemPedidoId);
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