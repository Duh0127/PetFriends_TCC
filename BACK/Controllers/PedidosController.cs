using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    //[Authorize(Roles = "Cliente")]
    [ApiController]
    [Route("[controller]")]
    public class PedidosController : ControllerBase
    {

        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public PedidosController(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
             _httpContextAccessor = httpContextAccessor;
        }

        private int ObterUsuarioId()
        {
            return int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Pedido> lista = await _context.Pedidos
                    .OrderByDescending(p => p.pedidoId)
                    .Include(p => p.Produto).ToListAsync();
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
                Pedido p = await _context.Pedidos
                    .Include(p => p.Produto).FirstOrDefaultAsync(pBusca => pBusca.pedidoId == id);

                return Ok(p);
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

                List<Pedido> lista = await _context.Pedidos
                    .OrderByDescending(p => p.pedidoId)
                    .Include(p => p.Produto)
                    
                    .Where(a => a.clienteId == id).ToListAsync();

                return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Add(Pedido novoPedido)
        {
            try
             {
                 
                
                novoPedido.Cliente = _context.Clientes.FirstOrDefault(cBusca => cBusca.clienteId == ObterUsuarioId());

                // int associadoId = int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
                // novoProduto.Associado = _context.Associados.FirstOrDefault(aBusca => aBusca.associadoId == associadoId);
                
                //INSERIR FORNECENDO ID DO ITENS PEDIDO
                   Produto p = await _context.Produtos
                       .FirstOrDefaultAsync(p => p.produtoId == novoPedido.produtoId);

                //  if(a == null)
                //      throw new System.Exception("Não existe Associado com o Id Informado.");
                
                novoPedido.dataPedido = System.DateTime.Now;
                 await _context.Pedidos.AddAsync(novoPedido);
                 await _context.SaveChangesAsync();

                 return Ok(novoPedido.pedidoId);
             }
                catch (Exception ex)
                {
                
                 return BadRequest(ex.InnerException);
                }
        }

        // [HttpPut]
        // public async Task<IActionResult> Update(Pedido novoPedido)
        // {
        //     try
        //     {
        //         if (novoPedido. == 0)
        //         {
        //             throw new Exception("Campo Valor não pode estar vazio!");
        //         }
        //         _context.Pedidos.Update(novoPedido);
        //         int linhasAfestadas = await _context.SaveChangesAsync();

        //         return Ok(linhasAfestadas);
        //     }
        //     catch (Exception ex)
        //     {
                
        //         return BadRequest(ex.Message);
        //     }
        // }

      
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
               Pedido pRemover = await _context.Pedidos
                .FirstOrDefaultAsync(p => p.pedidoId == id);

                _context.Pedidos.Remove(pRemover);
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