using System.Collections.Generic;
using System.Linq;
using ApiTcc.Models;
using ApiTcc.Models.Enuns;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TiposProdutosController : ControllerBase
    {
        private TiposProduto tp = new TiposProduto();
        private static List<TiposProduto> tiposproduto = new List<TiposProduto>
        {
            new TiposProduto(),
            new TiposProduto {tipoprodutoId = 2, descricaoTipo = "Descrição Produto B"},
            new TiposProduto {tipoprodutoId = 3, descricaoTipo = "Descrição Produto C"}
        };

        
        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(tiposproduto);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(tiposproduto.FirstOrDefault(Pe => Pe.tipoprodutoId == id));            
        }

        [HttpPost]
        public IActionResult AddProdutoServicos(TiposProduto novoTiposProduto)
        {
            tiposproduto.Add(novoTiposProduto);
            return Ok(tiposproduto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            tiposproduto.RemoveAll(prod => prod.tipoprodutoId == id);
            return Ok(tiposproduto);
        }




    }
}