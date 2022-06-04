using System;
using System.Collections.Generic;

namespace ApiTcc.Models
{
    public class ItemPedido
    {
        public int itemPedidoId { get; set; }
        public int produtoId {get; set;}
        //public int pedidoId {get; set; } // ERRO AO TENTAR SUBIR NO BANCO DE DADOS
        public Cliente Cliente {get; set;}
        public int clienteId {get; set; }
        public int qtdProduto { get; set; } // = 3;
        public double precoProduto { get; set; }  //= 180;
       // public double grandTotal  { get; set; }

    }
}