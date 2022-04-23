using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiTcc.Data;
using ApiTcc.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiTcc.Controllers
{
    //[Authorize(Roles = "Cliente")]
    [ApiController]
    [Route("[controller]")]
    public class PetsController : ControllerBase
    {

       private readonly DataContext _context;

        public PetsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Pet> lista = await _context.Pets.ToListAsync();
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
                Pet pt = await _context.Pets
                    .FirstOrDefaultAsync(ptBusca => ptBusca.petId == id);

                return Ok(pt);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }           
        }


        [HttpPost]
        public async Task<IActionResult> Add(Pet novoPet)
        {
            try
            {
                if (novoPet.nomePet == "" && novoPet.rgaPet == 0)
                    throw new Exception("Campos Nome e Preço não podem estar vazios!");
                
                Cliente c = await _context.Clientes
                    .FirstOrDefaultAsync(c => c.clienteId == novoPet.clienteId);

                if(c == null)

                    throw new System.Exception("Não existe Associado com o Id Informado.");
                await _context.Pets.AddAsync(novoPet);
                await _context.SaveChangesAsync();

                return Ok(novoPet.petId);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Pet novoPet)
        {
            try
            {
                if (novoPet.nomePet == "" && novoPet.especiePet == "")
                {
                    throw new Exception("Campos Nome e Espécie não podem estar vazios!");
                }
                _context.Pets.Update(novoPet);
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
               Pet ptRemover = await _context.Pets
                .FirstOrDefaultAsync(pt => pt.petId == id);

                _context.Pets.Remove(ptRemover);
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