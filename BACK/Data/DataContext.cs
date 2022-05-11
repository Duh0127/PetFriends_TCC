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

        public DbSet<Pet> Pets { get; set; }

        public DbSet<Plano> Planos { get; set; }

        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>().HasData
            ( 
            new Cliente(),
            new Cliente() { clienteId = 2, nome = "Cliente B", cpf = 12345678998, endereco = "Rua do Cliente B", telefone = "11900000000", email = "email@email.com" },
            new Cliente() { clienteId = 3, nome = "Cliente C", cpf = 12345678998, endereco = "Rua do Cliente C", telefone = "11900000000", email = "email@email.com" },
            new Cliente() { clienteId = 4, nome = "Cliente D", cpf = 12345678998, endereco = "Rua do Cliente D", telefone = "11900000000", email = "email@email.com" },
            new Cliente() { clienteId = 5, nome = "Cliente E", cpf = 12345678998, endereco = "Rua do Cliente E", telefone = "11900000000", email = "email@email.com" }
            );

            modelBuilder.Entity<Associado>().HasData
            ( 
            new Associado(),
            new Associado() { associadoId = 2, nome = "Associado B", cnpj = 1231134, endereco = "Rua do Associado B" },
            new Associado() { associadoId = 3, nome = "Associado C", cnpj = 1231134, endereco = "Rua do Associado C" },
            new Associado() { associadoId = 4, nome = "Associado D", cnpj = 1231134, endereco = "Rua do Associado D" },
            new Associado() { associadoId = 5, nome = "Associado E", cnpj = 1231134, endereco = "Rua do Associado E" }
            );

            modelBuilder.Entity<Comissao>().HasData
            (
                new Comissao(),
                new Comissao() { comissaoId = 2, porcentagemComissao = 10, valor = 130 },
                new Comissao() { comissaoId = 3, porcentagemComissao = 10, valor = 250 }
            );

            modelBuilder.Entity<Pedido>().HasData
            (
                new Pedido(),
                new Pedido() { pedidoId = 2, valor = 50, quantidade = 1, data = "12/04/2022", statusPedido = "Aguardando Confirmação", valorItem = 45 },
                new Pedido() { pedidoId = 3, valor = 77, quantidade = 3, data = "15/04/2022", statusPedido = "Reservado", valorItem = 85 }
            );

            modelBuilder.Entity<Pet>().HasData
            (
                new Pet(),
                new Pet() { petId = 2, nome = "Gato B", rga = 123321123, raca = "Raça B", porte = "Pequeno B", caracteristica = "Característica B", cor = "Cor B", microship = 1233211233, especie = "Gato" },
                new Pet() { petId = 3, nome = "Cachorro C", rga = 123321123, raca = "Raça C", porte = "Pequeno C", caracteristica = "Característica C", cor = "Cor C", microship = 1233211233, especie = "Cachorro" }
            );

            modelBuilder.Entity<Plano>().HasData
            (
                new Plano(),
                new Plano() { planoId = 2, nome = "Premium Gold", dataInicio = "05/04/2022", dataFim = "31/12/2022", valor = 300, percentual = 5 },
                new Plano() { planoId = 3, nome = "Premium Black", dataInicio = "05/04/2022", dataFim = "31/12/2022", valor = 500, percentual = 10 }
            );

            modelBuilder.Entity<Produto>().HasData
            (
                new Produto(),
                new Produto() { produtoId = 2, codigo = "9191", nome = "Produto B", fabricante = "Fabricante B", quantidade = 1, preco = 15 },
                new Produto() { produtoId = 3, codigo = "1010", nome = "Produto C", fabricante = "Fabricante C", quantidade = 7, preco = 350 }
            );




        }
    }
}