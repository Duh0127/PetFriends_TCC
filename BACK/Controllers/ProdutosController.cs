using System.Collections.Generic;
using System.Linq;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutoController : ControllerBase
    {

        private Produto p = new Produto();
        private static List<Produto> produtoservicos = new List<Produto>
        {
            new Produto(),
            new Produto {produtoId = 2, nome = "Produto/Servico B"},
            new Produto {produtoId = 3, nome = "Produto/Servico C"}
        };

        
        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(produtoservicos);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(produtoservicos.FirstOrDefault(Pe => Pe.produtoId == id));            
        }

        [HttpPost()]
        public IActionResult AddProdutoServicos(Produto novoProduto)
        {
            produtoservicos.Add(novoProduto);
            return Ok(produtoservicos);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            produtoservicos.RemoveAll(prod => prod.produtoId == id);
            return Ok(produtoservicos);
        }




    }
}