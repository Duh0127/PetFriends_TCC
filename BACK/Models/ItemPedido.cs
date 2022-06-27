using System;
using System.Collections.Generic;
using ApiTcc.Models.Enuns;

namespace ApiTcc.Models
{
    public class ItemPedido
    {
        public int itemPedidoId { get; set; }

        public Produto Produto { get; set; }
        public int associadoId { get; set; }
        public string nomeProduto { get; set; }
        public string codigoProduto { get; set; }
        public string fabricanteProduto { get; set; }
        public int produtoId {get; set;}
        public int qtdProduto { get; set; }
        public int precoProduto { get; set; } 
        
        // public string nomeCadAssociado { get; set; }
        // public string telCadAssociado { get; set; }
        // public string emailCadAssociado { get; set; }


        public Cliente Cliente {get; set;}
        public int clienteId {get; set; }
        
        // public string nomeCadcliente { get; set; }
        // public string telCadCliente { get; set; }
        // public string emailCadCliente { get; set; }

        public StatusEnum statusItemPedido { get; set; }


    }
}