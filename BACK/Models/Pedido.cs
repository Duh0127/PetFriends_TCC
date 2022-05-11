namespace ApiTcc.Models
{
    public class Pedido
    {
        public int pedidoId { get; set; } = 1;
        public int valor { get; set; } = 45;
        public int quantidade { get; set; } = 3;
        public string data { get; set; } = "12/04";
        public string statusPedido { get; set; } = "Reservado";
        public int valorItem { get; set; } = 180;
    }
}