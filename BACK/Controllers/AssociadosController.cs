using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ApiTcc.Models.Enuns;
using System.Linq;
using ApiTcc.Data;
using System.Threading.Tasks;
using System;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AssociadosController : ControllerBase
    {
        private readonly DataContext _context;

        public AssociadosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Associado> lista = await _context.Associados.ToListAsync();
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
                Associado a = await _context.Associados
                    .FirstOrDefaultAsync(aBusca => aBusca.associadoId == id);

                return Ok(a);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }           
        }


        [HttpPost]
        public async Task<IActionResult> Add(Associado novoAssociado)
        {
            try
            {
                if (novoAssociado.cnpj == 0)
                {
                    throw new Exception("Campo não pode estar vazio!");
                }
                await _context.Associados.AddAsync(novoAssociado);
                await _context.SaveChangesAsync();

                return Ok(novoAssociado.associadoId);
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
               Associado aRemover = await _context.Associados
                .FirstOrDefaultAsync(a => a.associadoId == id);

                _context.Associados.Remove(aRemover);
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