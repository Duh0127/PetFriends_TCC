using System.Text.Json.Serialization;

namespace ApiTcc.Models
{
    public class Pet
    {
        public Cliente Cliente { get; set; }
        public int clienteId { get; set; }
        public int petId { get; set; }
        public string nomePet { get; set; } 
        public int rgaPet { get; set; } 
        public string racaPet { get; set; } 
        public string portePet { get; set; } 
        public string caracteristicaPet { get; set; } 
        public string corPet { get; set; }
        public int microshipPet { get; set; } 
        public string especiePet { get; set; } 
        public byte[] petImagem { get; set; }
    }
}