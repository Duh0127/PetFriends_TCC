using System.Text.Json.Serialization;
using ApiTcc.Models.Enuns;

namespace ApiTcc.Models
{
    public class Produto
    {
        public int produtoId { get; set; } 
        public string codigoProduto { get; set; }
        public string nomeProduto { get; set; }
        public string fabricanteProduto { get; set; }
        public int qtdProduto { get; set; } 
        public byte[] produtoImagem { get; set; }
        public int precoProduto { get; set; } 
        public string descricaoProduto { get; set; } 
       // public string linkProduto {get; set;}
        public Associado Associado { get; set; }
        public int associadoId { get; set; }

        //erro na conversão de int para string
        
    }















}