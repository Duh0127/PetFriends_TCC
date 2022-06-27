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
    public class ComissoesAssociadosController : ControllerBase
    {

        private readonly DataContext _context;

        public ComissoesAssociadosController(DataContext context)
        {
            _context = context;
        }


        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<ComissaoAssociado> lista = await _context.ComissoesAssociados.ToListAsync();
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
                ComissaoAssociado co = await _context.ComissoesAssociados
                    .FirstOrDefaultAsync(coBusca => coBusca.associadoId == id);

                return Ok(co);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Add(ComissaoAssociado novaComissao)
        {
            try
            {
                if (novaComissao.valorFixo == 0)
                {
                    throw new Exception("Campo Valor não pode estar vazio!");
                }
                await _context.ComissoesAssociados.AddAsync(novaComissao);
                await _context.SaveChangesAsync();

                return Ok(novaComissao);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        public async Task<IActionResult> Update(ComissaoAssociado novaComissao)
        {
            try
            {
                if (novaComissao.valorFixo == 0)
                {
                    throw new Exception("Campo Valor não pode estar vazio!");
                }
                _context.ComissoesAssociados.Update(novaComissao);
                int linhasAfetadas = await _context.SaveChangesAsync();

                return Ok(linhasAfetadas);
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
               ComissaoAssociado coRemover = await _context.ComissoesAssociados
                    .FirstOrDefaultAsync(co => co.associadoId == id);

                _context.ComissoesAssociados.Remove(coRemover);
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