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
        public string nomeCadCliente { get; set; }
        public string cpfCadCliente { get; set; }
        public string enderecoCadCliente { get; set; }
        public string telCadCliente { get; set; }
        public string emailCadCliente { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] clienteImagem { get; set; }
        public string senhaCadCliente { get; set; }
        public string Perfil {get; set; }


        public List<Pedido> Pedido { get; set; }
    }
}