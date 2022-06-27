using System;
using System.Collections.Generic;
using ApiTcc.Models.Enuns;

namespace ApiTcc.Models
{
    public class Pedido
    {
        public int pedidoId { get; set; }
        public DateTime? dataPedido { get; set; }
       
        public ItemPedido ItemPedido { get; set; }
        public int itemPedidoId { get; set; }

        public int produtoId { get; set; }
        public string nomeProduto { get; set; }
        public string codigoProduto { get; set; }
        public int qtdProduto { get; set; }
        public int precoProduto { get; set; }
        public int associadoId { get; set; }

        public int clienteId {get; set;}
        public string nomeCadCliente { get; set; }
        public string telCadCliente { get; set; }
        public string emailCadCliente { get; set; }
        

        // public double valortotalPedido { get; set; }
        // public string nomeCadAssociado { get; set; }
        // public string telCadAssociado { get; set; }
        // public string emailCadAssociado { get; set; }

        public StatusEnum statusPedido { get; set; }



    }
}