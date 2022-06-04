using Microsoft.EntityFrameworkCore;
using ApiTcc.Models;
using ApiTcc.Models.Enuns;
using BACK.Models;
using BACK.Models.Enuns;

namespace ApiTcc.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Associado> Associados { get; set; }
        public DbSet<ComissaoAssociado> ComissoesAssociados { get; set; }
        public DbSet<ComissoesRegistro> ComissoesRegistros { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedido { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Sac> Sac { get; set; }

        //public DbSet<TiposProduto> TiposProdutos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>().HasData
            ( 
                new Cliente() { clienteId = 1, nomeCadCliente = "Cliente A", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente A", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456"},
                new Cliente() { clienteId = 2, nomeCadCliente = "Cliente B", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente B", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456"},
                new Cliente() { clienteId = 3, nomeCadCliente = "Cliente C", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente C", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456"},
                new Cliente() { clienteId = 4, nomeCadCliente = "Cliente D", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente D", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456"},
                new Cliente() { clienteId = 5, nomeCadCliente = "Cliente E", cpfCadCliente = "12345678998", enderecoCadCliente = "Rua do Cliente E", telCadCliente = "11900000000", emailCadCliente = "email@email.com", senhaCadCliente = "123456"}
            );

            modelBuilder.Entity<Associado>().HasData
            ( 
                new Associado() { associadoId = 1, nomeCadAssociado = "Associado A", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado A", emailCadAssociado = "associadoa@associadoa.com", senhaCadAssociado = "123456"},
                new Associado() { associadoId = 2, nomeCadAssociado = "Associado B", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado B", emailCadAssociado = "associadob@associadob.com", senhaCadAssociado = "123456"},
                new Associado() { associadoId = 3, nomeCadAssociado = "Associado C", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado C", emailCadAssociado = "associadoc@associadoc.com", senhaCadAssociado = "123456"},
                new Associado() { associadoId = 4, nomeCadAssociado = "Associado D", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado D", emailCadAssociado = "associadod@associadod.com", senhaCadAssociado = "123456"},
                new Associado() { associadoId = 5, nomeCadAssociado = "Associado E", cnpjCadAssociado = "1231134", enderecoCadAssociado = "Rua do Associado E", emailCadAssociado = "associadoe@associadoe.com", senhaCadAssociado = "123456"}
            );

            // modelBuilder.Entity<ComissaoAssociado>().HasData
            // (

            //      new ComissaoAssociado() { associadoId = 3, porcentagemComissao = 10, valorFixo = 100 },
            //      new ComissaoAssociado() { associadoId = 4, porcentagemComissao = 30, valorFixo = 130},
            //      new ComissaoAssociado() { associadoId = 5, porcentagemComissao = 50, valorFixo = 250}
            // );

            modelBuilder.Entity<ComissaoAssociado>(entity=>{ entity.HasNoKey();});
          

            modelBuilder.Entity<Pedido>().HasData
            (
                new Pedido() { pedidoId = 1, clienteId = 1},
                new Pedido() { pedidoId = 2, clienteId = 2},
                new Pedido() { pedidoId = 3, clienteId = 3}
            );

            modelBuilder.Entity<Produto>().HasData
            (
                new Produto() { produtoId = 1, categoriaProduto = CategoriaEnum.RacaoSeca, codigoProduto = "10001310000310", nomeProduto = "Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz", fabricanteProduto = "Fabricante A", qtdProduto = 5, precoProduto = 20, associadoId = 1},
                new Produto() { produtoId = 2, categoriaProduto = CategoriaEnum.RacaoDiet, codigoProduto = "10001320000030", nomeProduto = "Ração Seca PremieR Pet Golden Mega Cães Filhotes Raças Grandes Frango e Arroz", fabricanteProduto = "Fabricante B", qtdProduto = 1, precoProduto = 150, associadoId = 2 },
                new Produto() { produtoId = 3, categoriaProduto = CategoriaEnum.RacaoUmida, codigoProduto = "3108200-1", nomeProduto = "Ração Premier Golden Formula Cães Filhotes Carne e Arroz", fabricanteProduto = "Fabricante B", qtdProduto = 1, precoProduto = 146, associadoId = 3 }
            );

            modelBuilder.Entity<ItemPedido>().HasData
            (
                new ItemPedido() { itemPedidoId = 1, produtoId = 1, qtdProduto = 10, precoProduto = 10, clienteId = 1},
                new ItemPedido() { itemPedidoId = 2, produtoId = 1, qtdProduto = 10, precoProduto = 10, clienteId = 1},
                new ItemPedido() { itemPedidoId = 3, produtoId = 1, qtdProduto = 10, precoProduto = 10, clienteId = 1}
            );

            modelBuilder.Entity<Associado>().Property(a => a.Perfil).HasDefaultValue("Associado");

            modelBuilder.Entity<Cliente>().Property(c => c.Perfil).HasDefaultValue("Cliente");

           


        }
    }
}