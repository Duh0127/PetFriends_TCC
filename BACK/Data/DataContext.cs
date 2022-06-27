using Microsoft.EntityFrameworkCore;
using ApiTcc.Models.Enuns;
using ApiTcc.Models;
using BACK.Models;

namespace ApiTcc.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Associado> Associados { get; set; }
        public DbSet<ComissaoAssociado> ComissoesAssociados { get; set; }
        public DbSet<ComissaoRegistro> ComissoesRegistros { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedido { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Sac> Sac { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Cliente>().HasData
            (
            new Cliente() { clienteId = 1, nomeCadCliente = "Cliente A", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente A", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456" },
            new Cliente() { clienteId = 2, nomeCadCliente = "Cliente B", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente B", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456" },
            new Cliente() { clienteId = 3, nomeCadCliente = "Cliente C", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente C", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456" },
            new Cliente() { clienteId = 4, nomeCadCliente = "Cliente D", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente D", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456" },
            new Cliente() { clienteId = 5, nomeCadCliente = "Cliente E", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente E", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456" }
            );

            modelBuilder.Entity<Associado>().HasData
            (
            new Associado() { associadoId = 1, nomeCadAssociado = "Rogério", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado A", emailCadAssociado = "rogerioemail@email.com", senhaCadAssociado = "123456" },
            new Associado() { associadoId = 2, nomeCadAssociado = "Emerson", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado B", emailCadAssociado = "emersonemail@email.com", senhaCadAssociado = "123456" },
            new Associado() { associadoId = 3, nomeCadAssociado = "Mário", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado C", emailCadAssociado = "marioemail@email.com", senhaCadAssociado = "123456" },
            new Associado() { associadoId = 4, nomeCadAssociado = "Associado D", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado D", emailCadAssociado = "associadod@associadod.com", senhaCadAssociado = "123456" },
            new Associado() { associadoId = 5, nomeCadAssociado = "Associado E", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado E", emailCadAssociado = "associadoe@associadoe.com", senhaCadAssociado = "123456" }
            );

            modelBuilder.Entity<ItemPedido>().HasData
            (
                new ItemPedido() { itemPedidoId = 1, produtoId = 3, nomeProduto = "ProdutoA", fabricanteProduto = "FabricanteA", codigoProduto = "1209128", qtdProduto = 95, precoProduto = 120, clienteId = 1, statusItemPedido = StatusEnum.Carrinho},
                new ItemPedido() { itemPedidoId = 2, produtoId = 2, nomeProduto = "ProdutoB", fabricanteProduto = "FabricanteB", codigoProduto = "0998981", qtdProduto = 76, precoProduto = 870, clienteId = 3, statusItemPedido = StatusEnum.Carrinho},
                new ItemPedido() { itemPedidoId = 3, produtoId = 4, nomeProduto = "ProdutoC", fabricanteProduto = "FabricanteC", codigoProduto = "8786237", qtdProduto = 28, precoProduto = 298, clienteId = 2, statusItemPedido = StatusEnum.Carrinho}
            );

            modelBuilder.Entity<Pedido>().HasData
            (
                new Pedido() { pedidoId = 1, itemPedidoId = 1, nomeProduto = "ProdutoA", codigoProduto = "1209128", produtoId = 1, qtdProduto = 12, precoProduto = 90, clienteId = 1, nomeCadCliente = "ClienteA", telCadCliente = "11967676623", emailCadCliente = "clienteAemail@email.com", associadoId = 1},
                new Pedido() { pedidoId = 2, itemPedidoId = 1, nomeProduto = "ProdutoB", codigoProduto = "0998981", produtoId = 2, qtdProduto = 8, precoProduto = 40, clienteId = 2, nomeCadCliente = "ClienteB", telCadCliente = "11976123431", emailCadCliente = "clienteBemail@email.com", associadoId = 2},
                new Pedido() { pedidoId = 3, itemPedidoId = 1, nomeProduto = "ProdutoC", codigoProduto = "8786237", produtoId = 3, qtdProduto = 23, precoProduto = 120, clienteId = 3, nomeCadCliente = "ClienteC", telCadCliente = "11986211245", emailCadCliente = "clienteCemail@email.com", associadoId = 3}
            );                          

            modelBuilder.Entity<Produto>().HasData
            (
                new Produto() { produtoId = 1, categoriaProduto = CategoriaEnum.RacaoSeca, codigoProduto = "10001310000310", nomeProduto = "Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz", fabricanteProduto = "Fabricante A", qtdProduto = 5, precoProduto = 20, descricaoProduto = "Descrição da ração golden adultos", associadoId = 1, nomeCadAssociado = "Rogério", telCadAssociado = "11987720983", emailCadAssociado = "rogerioemail@email.com" },
                new Produto() { produtoId = 2, categoriaProduto = CategoriaEnum.RacaoDiet, codigoProduto = "10001320000030", nomeProduto = "Ração Seca PremieR Pet Golden Mega Cães Filhotes Raças Grandes Frango e Arroz", fabricanteProduto = "Fabricante B", qtdProduto = 1, precoProduto = 150, descricaoProduto = "Descrição do produto Golden seca filhote", associadoId = 2, nomeCadAssociado = "Emerson", telCadAssociado = "11976650912", emailCadAssociado = "emersonemail@email.com" },
                new Produto() { produtoId = 3, categoriaProduto = CategoriaEnum.RacaoUmida, codigoProduto = "31082009878971", nomeProduto = "Ração Premier Golden Formula Cães Filhotes Carne e Arroz", fabricanteProduto = "Fabricante B", qtdProduto = 1, precoProduto = 146, descricaoProduto = "Descrição do produto Golden premier", associadoId = 3, nomeCadAssociado = "Mário", telCadAssociado = "11954328761", emailCadAssociado = "marioemail@email.com" }
            );
        

            modelBuilder.Entity<ComissaoAssociado>().HasData
            (
                new ComissaoAssociado() { associadoId = 1, porcentagemComissao = 20, valorFixo = 150 },
                new ComissaoAssociado() { associadoId = 2, porcentagemComissao = 15, valorFixo = 150 },
                new ComissaoAssociado() { associadoId = 3, porcentagemComissao = 10, valorFixo = 150 }
            );

            modelBuilder.Entity<Associado>().Property(a => a.Perfil).HasDefaultValue("Associado");

            modelBuilder.Entity<Cliente>().Property(c => c.Perfil).HasDefaultValue("Cliente");

            // modelBuilder.Entity<ComissaoAssociado>(entity=>{ entity.HasNoKey();});
            modelBuilder.Entity<ComissaoRegistro>(entity=>{ entity.HasNoKey();});
        }
    }
}