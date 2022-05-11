using System.Collections.Generic;
using System.Linq;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlanosController : ControllerBase
    {

        private Plano p = new Plano();
        private static List<Plano> planos = new List<Plano>
        {
            new Plano(),
            new Plano {planoId = 2, nome = "PlanoB"},
            new Plano {planoId = 3, nome = "PlanoC"}
        };

        
        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(planos);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(planos.FirstOrDefault(Pe => Pe.planoId == id));            
        }

        [HttpPost]
        public IActionResult AddPlanos(Plano novoPlano)
        {
            planos.Add(novoPlano);
            return Ok(planos);
        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            planos.RemoveAll(pla => pla.planoId == id);
            return Ok(planos);
        }










    }
}