namespace ApiTcc.Models
{
    public class Plano
    {
        public int planoId { get; set; } = 1;
        public string nome { get; set; } = "Plano Bronze";
        public string dataInicio { get; set; } = "05/04/2022";
        public string dataFim { get; set; } = "31/12/2022";
        public int valor { get; set; } = 120;
        public int percentual { get; set; } = 10;
    }



    
}