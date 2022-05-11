using System.Collections.Generic;
using System.Linq;
using ApiTcc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiTcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PetsController : ControllerBase
    {

        private Pet p = new Pet();
        private static List<Pet> pets = new List<Pet>
        {
            new Pet(),
            new Pet {petId = 2, nome = "Pet B", rga = 123123123, raca = "Raça B", porte = "Pequeno B", caracteristica = "Característica B", cor = "Cor B", microship = 1231231231, especie = "Gato B"},
            new Pet {petId = 3, nome = "Pet C", rga = 123123123, raca = "Raça C", porte = "Pequeno C", caracteristica = "Característica C", cor = "Cor C", microship = 1231231231, especie = "Cachorro C"}
        };

        
        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(pets);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(pets.FirstOrDefault(Pe => Pe.petId == id));            
        }

        [HttpPost]
        public IActionResult AddPets(Pet novoPet)
        {
            pets.Add(novoPet);
            return Ok(pets);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            pets.RemoveAll(pet => pet.petId == id);
            return Ok(pets);
        }





    }
}