namespace ApiTcc.Models.Enuns
{
    public class Associado
    {
        public int associadoId { get; set; } = 1;
        public string nome { get; set; } = "Associado A";
        public int cnpj { get; set; } = 1231134;
        public string endereco { get; set; } = "Rua do associado A";
        public byte[] associadoImagem { get; set; }
        public PlanoEnum TipoPlano { get; set; } = PlanoEnum.PremiumBlack;
    }
}