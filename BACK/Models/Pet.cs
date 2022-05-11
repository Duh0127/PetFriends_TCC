namespace ApiTcc.Models
{
    public class Pet
    {
        public int petId { get; set; } = 1;
        public string nome { get; set; } = "Cachorro A";
        public int rga { get; set; } = 123123123;
        public string raca { get; set; } = "Raça A";
        public string porte { get; set; } = "Pequeno A";
        public string caracteristica { get; set; } = "Característica A";
        public string cor { get; set; } = "Cor A";
        public int microship { get; set; } = 1231231231;
        public string especie { get; set; } = "Cachorro A";
        public byte[] petImagem { get; set; }
    }
}