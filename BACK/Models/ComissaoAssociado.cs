

using System.ComponentModel.DataAnnotations;

namespace ApiTcc.Models
{
    public class ComissaoAssociado
    {
        [Key]
        public int associadoId { get; set; }
        public double porcentagemComissao { get; set; } 
        public double valorFixo { get; set; }


    }
}