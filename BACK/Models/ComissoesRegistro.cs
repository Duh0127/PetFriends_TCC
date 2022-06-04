using System;

namespace BACK.Models
{
    public class ComissoesRegistro
    {
        public int comissoesregistroId { get; set; }
        public int associadoId { get; set; }
        public int pedidoId { get; set; }
        public float A { get; set; }
        public float BXC { get; set; }
        public DateTime? dataComissao { get; set; }
        public string statusComissao { get; set; }
    
    
    
    
    
    
    }   
}