namespace ApiTcc.Models
{
    public class Cliente
    {
        public int clienteId { get; set; } = 1;
        public string nome { get; set; } = "Cliente A";
        public float cpf { get; set; } = 1233221123;
        public string endereco { get; set; } = "Rua do Cliente A";
        public string telefone { get; set; } = "11900000000";
        public string email { get; set; } = "email@email.com";
        public byte[] clienteImagem { get; set; }
    }
}