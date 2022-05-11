using System.Collections.Generic;
using System.Linq;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ComissoesController : ControllerBase
    {
        private Comissao c = new Comissao();
        private static List<Comissao> comissoes = new List<Comissao>
        {
            new Comissao(),
            new Comissao {comissaoId = 2, valor = 200}
        };


        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(comissoes);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(comissoes.FirstOrDefault(Pe => Pe.comissaoId == id));            
        }

        [HttpPost]
        public IActionResult AddComissoes(Comissao novaComissao)
        {
            comissoes.Add(novaComissao);
            return Ok(comissoes);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            comissoes.RemoveAll(com => com.comissaoId == id);
            return Ok(comissoes);
        }




    }
}