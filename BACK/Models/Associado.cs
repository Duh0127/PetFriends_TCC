using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiTcc.Models
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
        public string senhaCadAssociado{ get; set; }
        public string Perfil {get; set; }
        public List<Produto> Produtos { get; set; }


        // public ComissaoAssociado ComissaoAssociado{ get; set; }
        // pensar se vai mudar o relacionamento de   ASSOCIADO -> COMISSAO    para   COMISSAO -> ASSOCIADO
    }
}