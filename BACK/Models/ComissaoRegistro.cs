using System;

namespace BACK.Models
{
    public class ComissaoRegistro
    {
        public int comissoesregistroId { get; set; }
        public int associadoId { get; set; }
        public int pedidoId { get; set; }
        public double A { get; set; }
        public double BXC { get; set; }
        public DateTime? dataComissao { get; set; }
        public string statusComissao { get; set; }
    }
}