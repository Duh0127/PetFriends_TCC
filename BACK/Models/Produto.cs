using ApiTcc.Models.Enuns;
using BACK.Models.Enuns;

namespace ApiTcc.Models
{
    public class Produto
    {
        public int produtoId { get; set; } 
        public CategoriaEnum categoriaProduto {get; set;}
        public string codigoProduto { get; set; }
        public string nomeProduto { get; set; }
        public string fabricanteProduto { get; set; }
        public int qtdProduto { get; set; } 
        public byte[] produtoImagem { get; set; }
        public int precoProduto { get; set; } 
        public string descricaoProduto { get; set; } 


        public Associado Associado { get; set; }
        public int associadoId { get; set; }
        

    }
}