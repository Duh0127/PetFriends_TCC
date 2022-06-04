namespace ApiTcc.Models
{
    public class Pedido
    {
        public Cliente Cliente { get; set; }
        public int pedidoId { get; set; }
        public int valorTotalPedido { get; set; }
        public int qtdPedido { get; set; } // = 3;
        public string dataPedido { get; set; } // = "12/04";
        public string statusPedido { get; set; } // = "Reservado";
        public int valorUniPedido { get; set; }  //= 180;
    }
}