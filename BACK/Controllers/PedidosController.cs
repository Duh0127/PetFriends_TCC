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
                    .Include(p => p.ItemPedido).ToListAsync();
                return Ok(lista);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByUser/{statusId}")]
        
        public async Task<IActionResult> GetByUserStatusAsync(int statusId)
        {
            try
            {
                int id = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

                List<Pedido> lista = await _context.Pedidos
                    .Where(i => i.statusPedido == (StatusEnum)statusId)
                    .OrderByDescending(i => i.pedidoId)
                    .Where(a => a.associadoId == id).ToListAsync();

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
                Pedido p = await _context.Pedidos
                    .Include(p => p.ItemPedido).FirstOrDefaultAsync(pBusca => pBusca.pedidoId == id);

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
                    .Include(p => p.ItemPedido)
                    .Where(a => a.clienteId == id)
                    .ToListAsync();

                    return Ok(lista);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(Pedido novoPedido)
        {

            try
            {

                
                //INSERIR FORNECENDO ID DO PRODUTO
                ItemPedido i = await _context.ItensPedido
                    .FirstOrDefaultAsync(p => p.itemPedidoId == novoPedido.itemPedidoId);

                Produto p = await _context.Produtos
                      .FirstOrDefaultAsync(p => p.produtoId == novoPedido.produtoId);

                    p.qtdProduto = p.qtdProduto - i.qtdProduto;
                    i.statusItemPedido = StatusEnum.Reservado;
                    novoPedido.nomeCadCliente = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
                    novoPedido.emailCadCliente = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
                    novoPedido.telCadCliente = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.MobilePhone);
                    novoPedido.statusPedido = StatusEnum.Reservado;
                    novoPedido.dataPedido = System.DateTime.Now;
                    //_context.ItensPedido.Update(i);
                    await _context.Pedidos.AddAsync(novoPedido);
                    await _context.SaveChangesAsync();

                 return Ok(novoPedido.pedidoId);
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
               Pedido pRemover = await _context.Pedidos
                .FirstOrDefaultAsync(p => p.pedidoId == id);

                _context.Pedidos.Remove(pRemover);
                int linhasAfetadas = await _context.SaveChangesAsync();

                return Ok(linhasAfetadas);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }



    }
}