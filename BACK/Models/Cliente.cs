using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace ApiTcc.Models
{
    public class Cliente
    {
        public int clienteId { get; set; }

        //[Required(ErrorMessage = "Nome não pode ser nulo")]
        public string nomeCadCliente { get; set; }

        public string cpfCadCliente { get; set; }

        //[Required(ErrorMessage = "Endereço não pode ser nulo")]
        public string enderecoCadCliente { get; set; }

        //[Required(ErrorMessage = "Telefone não pode ser nulo")]
        public string telCadCliente { get; set; }

        //[Required(ErrorMessage = "E-mail não pode ser nulo")]
        public string emailCadCliente { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] clienteImagem { get; set; }
        public List<Pedido> Pedidos { get; set; }
        public string senhaCadCliente { get; set; }

        //[Required]
        public string Perfil {get; set; }

        // [NotMapped]
        // //[Required(ErrorMessage = "Senha não pode ser nulo")]
        // public string senhaCadCliente { get; set; }
    }
}