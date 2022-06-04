using System;
using System.Collections.Generic;

namespace ApiTcc.Models
{
    public class ItemPedido
    {        
        public int itemPedidoId { get; set; }

        public Produto Produto { get; set; }
        public string codigoProduto { get; set; }
        public int produtoId {get; set;}
        public int qtdProduto { get; set; }
        public float precoProduto { get; set; } 
        public int associadoId { get; set; }


        public Cliente Cliente {get; set;}
        public int clienteId {get; set; }

       
    }
}