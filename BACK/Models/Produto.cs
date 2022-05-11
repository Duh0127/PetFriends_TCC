namespace ApiTcc.Models
{
    public class Produto
    {
        public int produtoId { get; set; } = 1;
        public string codigo { get; set; } = "9090";
        public string nome { get; set; } = "Produto A";
        public string fabricante { get; set; } = "Fabricante A";
        public int quantidade { get; set; } = 20;
        public byte[] produtoImagem { get; set; }
        public int preco { get; set; } = 25;
        
    }















}