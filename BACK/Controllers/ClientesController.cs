using System.Collections.Generic;
using System.Linq;
using ApiTcc.Data;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientesController : ControllerBase
    {

        /*private readonly DataContext _context;

        public ClientesController(DataContext context)
        {
            _context = context;
        }*/
        private Cliente c = new Cliente();
        private static List<Cliente> clientes = new List<Cliente>
        {
            new Cliente(),
            new Cliente {clienteId = 2, nome = "ClienteB"}
        };


        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(clientes);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(clientes.FirstOrDefault(Pe => Pe.clienteId == id));            
        }

        [HttpPost]
        public IActionResult AddClientes(Cliente novoCliente)
        {
            clientes.Add(novoCliente);
            return Ok(clientes);
        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            clientes.RemoveAll(cli => cli.clienteId == id);
            return Ok(clientes);
        }





    }
}