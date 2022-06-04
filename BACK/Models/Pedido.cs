using System;
using System.Collections.Generic;

namespace ApiTcc.Models
{
    public class Pedido
    {
        public Produto Produto { get; set; }
        public int pedidoId { get; set; }
        public string nomeProduto {get; set;}
        public string codigoProduto {get; set; }
        public int qtdProduto { get; set; } // = 3;
        public DateTime? dataPedido { get; set; } // = "12/04";
        //public string statusPedido { get; set; } // = "Reservado";
        public double precoProduto { get; set; }  //= 180;
        public double grandTotal  { get; set; }
        public List<Produto> Produtos { get; set; }

    }
}