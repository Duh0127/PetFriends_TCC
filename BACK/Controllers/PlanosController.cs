using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlanosController : ControllerBase
    {

       private readonly DataContext _context;

        public PlanosController(DataContext context)
        {
            _context = context;
        }


        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Plano> lista = await _context.Planos.ToListAsync();
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
                Plano pl = await _context.Planos
                    .FirstOrDefaultAsync(plBusca => plBusca.planoId == id);

                return Ok(pl);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }           
        }


        [HttpPost]
        public async Task<IActionResult> Add(Plano novoPlano)
        {
            try
            {
                if (novoPlano.nome == "" && novoPlano.valor == 0)
                {
                    throw new Exception("Campos Nome e Valor não podem estar vazios!");
                }
                await _context.Planos.AddAsync(novoPlano);
                await _context.SaveChangesAsync();

                return Ok(novoPlano.planoId);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Plano novoPlano)
        {
            try
            {
                if (novoPlano.nome == "" && novoPlano.valor == 0)
                {
                    throw new Exception("Campos Nome e Valor não podem estar vazios!");
                }
                _context.Planos.Update(novoPlano);
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
               Plano plRemover = await _context.Planos
                .FirstOrDefaultAsync(pl => pl.planoId == id);

                _context.Planos.Remove(plRemover);
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