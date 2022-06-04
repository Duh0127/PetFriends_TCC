namespace ApiTcc.Models
{
    public class Comissao
    {
        public int comissaoId { get; set; }
        public double porcentagemComissao { get; set; } = 10;
        public double valor { get; set; } = 100;
    }
}