using Microsoft.EntityFrameworkCore;
using ApiTcc.Models;
using ApiTcc.Models.Enuns;

namespace ApiTcc.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Associado> Associados { get; set; }

        public DbSet<Comissao> Comissoes { get; set; }

        public DbSet<Pedido> Pedidos { get; set; }

        public DbSet<Plano> Planos { get; set; }

        public DbSet<Produto> Produtos { get; set; }

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

            modelBuilder.Entity<Comissao>().HasData
            (
                new Comissao() { comissaoId = 1, porcentagemComissao = 10, valor = 100 },
                new Comissao() { comissaoId = 2, porcentagemComissao = 10, valor = 130 },
                new Comissao() { comissaoId = 3, porcentagemComissao = 10, valor = 250 }
            );

            modelBuilder.Entity<Pedido>().HasData
            (
                new Pedido() { pedidoId = 1, grandTotal = 95,  qtdProduto = 1, precoProduto = 95  },
                new Pedido() { pedidoId = 2, grandTotal = 45,  qtdProduto = 2, precoProduto = 22 },
                new Pedido() { pedidoId = 3, grandTotal = 85,  qtdProduto = 3, precoProduto = 25 }
            );


            modelBuilder.Entity<Plano>().HasData
            (
                new Plano() { planoId = 1, nome = "Premium Bronze", dataInicio = "05/04/2022", dataFim = "31/10/2022", valor = 100, percentual = 5 },
                new Plano() { planoId = 2, nome = "Premium Gold", dataInicio = "05/05/2022", dataFim = "31/11/2022", valor = 300, percentual = 5 },
                new Plano() { planoId = 3, nome = "Premium Black", dataInicio = "05/06/2022", dataFim = "31/12/2022", valor = 500, percentual = 10 }
            );

            modelBuilder.Entity<Produto>().HasData
            (
                new Produto() { produtoId = 1, codigoProduto = "9191", nomeProduto = "Produto A", fabricanteProduto = "Fabricante A", qtdProduto = 5, precoProduto = 20, associadoId = 1},
                new Produto() { produtoId = 2, codigoProduto = "9192", nomeProduto = "Produto B", fabricanteProduto = "Fabricante B", qtdProduto = 1, precoProduto = 15, associadoId = 2 },
                new Produto() { produtoId = 3, codigoProduto = "1010", nomeProduto = "Produto C", fabricanteProduto = "Fabricante C", qtdProduto = 7, precoProduto = 350, associadoId = 3 }
            );

            /*modelBuilder.Entity<TiposProduto>().HasData
            (
                new TiposProduto(),
                new TiposProduto() { tipoprodutoId = 2, descricaoTipo = "Descrição Produto B" },
                new TiposProduto() { tipoprodutoId = 3, descricaoTipo = "Descrição Produto C" }
            );*/

            modelBuilder.Entity<Associado>().Property(a => a.Perfil).HasDefaultValue("Associado");

            modelBuilder.Entity<Cliente>().Property(c => c.Perfil).HasDefaultValue("Cliente");


        }
    }
}