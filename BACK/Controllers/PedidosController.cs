using System.Collections.Generic;
using System.Linq;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PedidosController : ControllerBase
    {

        private Pedido p = new Pedido();
        private static List<Pedido> pedidos = new List<Pedido>
        {
            new Pedido(),
            new Pedido {pedidoId = 2, valor = 55}
        };


        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(pedidos);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(pedidos.FirstOrDefault(Pe => Pe.pedidoId == id));            
        }
        
        [HttpPost]
        public IActionResult AddPedidos(Pedido novoPedido)
        {
            pedidos.Add(novoPedido);
            return Ok(pedidos);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            pedidos.RemoveAll(ped => ped.pedidoId == id);
            return Ok(pedidos);
        }



    }
}