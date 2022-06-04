using System;
using System.Collections.Generic;

namespace ApiTcc.Models
{
    public class Pedido
    {
        public int pedidoId { get; set; }
        //public Produto Produto { get; set; }
        public int clienteId {get; set;}
        public int produtoId { get; set; }
        public DateTime? dataPedido { get; set; }
        public string nomeProduto { get; set; }
        public string codigoProduto { get; set; }
        public int qtdProduto { get; set; } 
        public int precoProduto { get; set; } 
        //public double grandTotal { get; set; }



        /*-----------IDEIA PROFESSOR LUIZ---------------*/
        public Produto Produto { get; set; }
        public Cliente Cliente {get; set;}
        // public double valorTotal {get; set;}
         
        // public List<ItemPedido> ItensPedido { get; set; }
        // public List<Produto> Produtos { get; set; }

    }
}