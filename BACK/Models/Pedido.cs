using System;
using System.Collections.Generic;
using ApiTcc.Models.Enuns;

namespace ApiTcc.Models
{
    public class Pedido
    {
        public int pedidoId { get; set; }
        public DateTime? dataPedido { get; set; }


        public Cliente Cliente {get; set;}
        public int clienteId {get; set;}
        
        
        public ItemPedido ItemPedido { get; set; } 
        public int itemPedidoId {get; set;}   //INCLUIR NA TABELA, CASO NÃO TENHA  
        public int produtoId { get; set; }
        public string codigoProduto { get; set; }
        public float valortotalPedido { get; set; } 
        public int associadoId { get; set; }

       



        public StatusPedido StatusPedido { get; set; }

        
    }
}