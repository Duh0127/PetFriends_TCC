using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using ApiTcc.Models.Enuns;

namespace ApiTcc.Models
{
    public class ComissaoAssociado
    {
        public int associadoId { get; set; }
        public double porcentagemComissao { get; set; } 
        public double valorFixo { get; set; }    
        
        
    }
}