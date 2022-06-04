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
    public class ComissoesController : ControllerBase
    {

    private readonly DataContext _context;

    public ComissoesController(DataContext context)
    {
        _context = context;
    }

    [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Comissao> lista = await _context.Comissoes.ToListAsync();
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
                Comissao co = await _context.Comissoes
                    .FirstOrDefaultAsync(coBusca => coBusca.comissaoId == id);

                return Ok(co);

            }
            catch (Exception ex)
            {
                   
                return BadRequest(ex.Message);
            }         
        }

        [HttpPost]
        public async Task<IActionResult> Add(Comissao novaComissao)
        {
            try
            {
                if (novaComissao.valor == 0)
                {
                    throw new Exception("Campo Valor não pode estar vazio!");

                }
                await _context.Comissoes.AddAsync(novaComissao);
                await _context.SaveChangesAsync();

                return Ok(novaComissao);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Comissao novaComissao)
        {
            try
            {
                if (novaComissao.valor == 0)
                {
                    throw new Exception("Campo Valor não pode estar vazio!");
                }
                _context.Comissoes.Update(novaComissao);
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
               Comissao coRemover = await _context.Comissoes
                    .FirstOrDefaultAsync(co => co.comissaoId == id);

                _context.Comissoes.Remove(coRemover);
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