using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using Microsoft.AspNetCore.Authorization;
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

        public PedidosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Pedido> lista = await _context.Pedidos.ToListAsync();
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
                    .FirstOrDefaultAsync(pBusca => pBusca.pedidoId == id);

                return Ok(p);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }           
        }


        [HttpPost]
        public async Task<IActionResult> Add(Pedido novoPedido)
        {
            try
            {
                if (novoPedido.valorUniPedido == 0)
                {
                    throw new Exception("Campo Valor não pode estar vazio!");
                }
                await _context.Pedidos.AddAsync(novoPedido);
                await _context.SaveChangesAsync();

                return Ok(novoPedido.pedidoId);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Pedido novoPedido)
        {
            try
            {
                if (novoPedido.valorUniPedido == 0)
                {
                    throw new Exception("Campo Valor não pode estar vazio!");
                }
                _context.Pedidos.Update(novoPedido);
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