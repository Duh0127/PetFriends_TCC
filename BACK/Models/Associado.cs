using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiTcc.Models.Enuns
{
    public class Associado
    {
        public int associadoId { get; set; }
        public string nomeCadAssociado { get; set; } 
        public string telCadAssociado { get; set;}
        public string emailCadAssociado { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string cnpjCadAssociado { get; set; } 
        public string enderecoCadAssociado { get; set; }
        public byte[] associadoImagem { get; set; }
        public PlanoEnum tipoPlano { get; set; } //= PlanoEnum.PremiumBlack;
        public List<Produto> Produtos { get; set; }
        public string senhaCadAssociado{ get; set; }

        //[Required]
        public string Perfil {get; set; }


        // [NotMapped]
        // public string senhaCadAssociado{ get; set; }


    }
}