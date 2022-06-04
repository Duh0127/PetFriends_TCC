/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using ApiTcc.Models.Enuns;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TiposProdutosController : ControllerBase
    {

    private readonly DataContext _context;

    public TiposProdutosController(DataContext context)
    {
        _context = context;
    }

    [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<TiposProduto> lista = await _context.TiposProdutos.ToListAsync();
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
                TiposProduto tp = await _context.TiposProdutos
                    .FirstOrDefaultAsync(tpBusca => tpBusca.tipoprodutoId == id);

                return Ok(tp);

            }
            catch (Exception ex)
            {
                   
                return BadRequest(ex.Message);
            }         
        }

        [HttpPost]
        public async Task<IActionResult> Add(TiposProduto novoTiposProdutos)
        {
            try
            {
                if (novoTiposProdutos.descricaoTipo == "")
                {
                    throw new Exception("Campo Descrição não pode estar vazio!");

                }
                await _context.TiposProdutos.AddAsync(novoTiposProdutos);
                await _context.SaveChangesAsync();

                return Ok(novoTiposProdutos);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }
        
        [HttpPut]
        public async Task<IActionResult> Update(TiposProduto novoTiposProdutos)
        {
            try
            {
                if (novoTiposProdutos.descricaoTipo == "")
                {
                    throw new Exception("Campo Descrição não pode estar vazio!");
                }
                _context.TiposProdutos.Update(novoTiposProdutos);
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
               TiposProduto tpRemover = await _context.TiposProdutos
                    .FirstOrDefaultAsync(tp => tp.tipoprodutoId == id);

                _context.TiposProdutos.Remove(tpRemover);
                int linhasAfetadas = await _context.SaveChangesAsync();

                return Ok(linhasAfetadas);
           }
           catch (Exception ex)
           {

               return BadRequest(ex.Message);
           }
        }



    }
}*/