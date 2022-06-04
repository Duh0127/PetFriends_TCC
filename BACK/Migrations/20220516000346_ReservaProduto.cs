using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApiTcc.Migrations
{
    public partial class ReservaProduto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Associados",
                columns: table => new
                {
                    associadoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomeCadAssociado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    telCadAssociado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    emailCadAssociado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    cnpjCadAssociado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    enderecoCadAssociado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    associadoImagem = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    tipoPlano = table.Column<int>(type: "int", nullable: false),
                    senhaCadAssociado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Perfil = table.Column<string>(type: "nvarchar(max)", nullable: true, defaultValue: "Associado")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Associados", x => x.associadoId);
                });

            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    clienteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomeCadCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cpfCadCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    enderecoCadCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    telCadCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    emailCadCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    clienteImagem = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    senhaCadCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Perfil = table.Column<string>(type: "nvarchar(max)", nullable: true, defaultValue: "Cliente")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.clienteId);
                });

            migrationBuilder.CreateTable(
                name: "Comissoes",
                columns: table => new
                {
                    comissaoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    porcentagemComissao = table.Column<double>(type: "float", nullable: false),
                    valor = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comissoes", x => x.comissaoId);
                });

            migrationBuilder.CreateTable(
                name: "Planos",
                columns: table => new
                {
                    planoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dataInicio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dataFim = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    valor = table.Column<int>(type: "int", nullable: false),
                    percentual = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Planos", x => x.planoId);
                });

            migrationBuilder.CreateTable(
                name: "Sac",
                columns: table => new
                {
                    sacId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    problemaSac = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nomeSac = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    telefoneSac = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    emailSac = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    descSac = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sac", x => x.sacId);
                });

            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    produtoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fabricanteProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    qtdProduto = table.Column<int>(type: "int", nullable: false),
                    produtoImagem = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    precoProduto = table.Column<int>(type: "int", nullable: false),
                    descricaoProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    associadoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.produtoId);
                    table.ForeignKey(
                        name: "FK_Produtos_Associados_associadoId",
                        column: x => x.associadoId,
                        principalTable: "Associados",
                        principalColumn: "associadoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ItensPedido",
                columns: table => new
                {
                    itemPedidoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    produtoId = table.Column<int>(type: "int", nullable: false),
                    clienteId = table.Column<int>(type: "int", nullable: false),
                    qtdProduto = table.Column<int>(type: "int", nullable: false),
                    precoProduto = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItensPedido", x => x.itemPedidoId);
                    table.ForeignKey(
                        name: "FK_ItensPedido_Clientes_clienteId",
                        column: x => x.clienteId,
                        principalTable: "Clientes",
                        principalColumn: "clienteId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pedidos",
                columns: table => new
                {
                    pedidoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    clienteId = table.Column<int>(type: "int", nullable: false),
                    produtoId = table.Column<int>(type: "int", nullable: false),
                    dataPedido = table.Column<DateTime>(type: "datetime2", nullable: true),
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    qtdProduto = table.Column<int>(type: "int", nullable: false),
                    precoProduto = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pedidos", x => x.pedidoId);
                    table.ForeignKey(
                        name: "FK_Pedidos_Clientes_clienteId",
                        column: x => x.clienteId,
                        principalTable: "Clientes",
                        principalColumn: "clienteId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Pedidos_Produtos_produtoId",
                        column: x => x.produtoId,
                        principalTable: "Produtos",
                        principalColumn: "produtoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Associados",
                columns: new[] { "associadoId", "PasswordHash", "PasswordSalt", "associadoImagem", "cnpjCadAssociado", "emailCadAssociado", "enderecoCadAssociado", "nomeCadAssociado", "senhaCadAssociado", "telCadAssociado", "tipoPlano" },
                values: new object[,]
                {
                    { 1, null, null, null, "1231134", "associadoa@associadoa.com", "Rua do Associado A", "Associado A", "123456", null, 0 },
                    { 2, null, null, null, "1231134", "associadob@associadob.com", "Rua do Associado B", "Associado B", "123456", null, 0 },
                    { 3, null, null, null, "1231134", "associadoc@associadoc.com", "Rua do Associado C", "Associado C", "123456", null, 0 },
                    { 4, null, null, null, "1231134", "associadod@associadod.com", "Rua do Associado D", "Associado D", "123456", null, 0 },
                    { 5, null, null, null, "1231134", "associadoe@associadoe.com", "Rua do Associado E", "Associado E", "123456", null, 0 }
                });

            migrationBuilder.InsertData(
                table: "Clientes",
                columns: new[] { "clienteId", "PasswordHash", "PasswordSalt", "clienteImagem", "cpfCadCliente", "emailCadCliente", "enderecoCadCliente", "nomeCadCliente", "senhaCadCliente", "telCadCliente" },
                values: new object[,]
                {
                    { 1, null, null, null, "12345678998", "email@email.com", "Rua do Cliente A", "Cliente A", "123456", "11900000000" },
                    { 2, null, null, null, "12345678998", "email@email.com", "Rua do Cliente B", "Cliente B", "123456", "11900000000" },
                    { 3, null, null, null, "12345678998", "email@email.com", "Rua do Cliente C", "Cliente C", "123456", "11900000000" },
                    { 4, null, null, null, "12345678998", "email@email.com", "Rua do Cliente D", "Cliente D", "123456", "11900000000" },
                    { 5, null, null, null, "12345678998", "email@email.com", "Rua do Cliente E", "Cliente E", "123456", "11900000000" }
                });

            migrationBuilder.InsertData(
                table: "Comissoes",
                columns: new[] { "comissaoId", "porcentagemComissao", "valor" },
                values: new object[,]
                {
                    { 1, 10.0, 100.0 },
                    { 2, 10.0, 130.0 },
                    { 3, 10.0, 250.0 }
                });

            migrationBuilder.InsertData(
                table: "Planos",
                columns: new[] { "planoId", "dataFim", "dataInicio", "nome", "percentual", "valor" },
                values: new object[,]
                {
                    { 1, "31/10/2022", "05/04/2022", "Premium Bronze", 5, 100 },
                    { 2, "31/11/2022", "05/05/2022", "Premium Gold", 5, 300 },
                    { 3, "31/12/2022", "05/06/2022", "Premium Black", 10, 500 }
                });

            migrationBuilder.InsertData(
                table: "Produtos",
                columns: new[] { "produtoId", "associadoId", "codigoProduto", "descricaoProduto", "fabricanteProduto", "nomeProduto", "precoProduto", "produtoImagem", "qtdProduto" },
                values: new object[] { 1, 1, "10001310000310", null, "Fabricante A", "Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz", 20, null, 5 });

            migrationBuilder.InsertData(
                table: "Produtos",
                columns: new[] { "produtoId", "associadoId", "codigoProduto", "descricaoProduto", "fabricanteProduto", "nomeProduto", "precoProduto", "produtoImagem", "qtdProduto" },
                values: new object[] { 2, 2, "10001320000030", null, "Fabricante B", "Ração Seca PremieR Pet Golden Mega Cães Filhotes Raças Grandes Frango e Arroz", 150, null, 1 });

            migrationBuilder.InsertData(
                table: "Produtos",
                columns: new[] { "produtoId", "associadoId", "codigoProduto", "descricaoProduto", "fabricanteProduto", "nomeProduto", "precoProduto", "produtoImagem", "qtdProduto" },
                values: new object[] { 3, 3, "3108200-1", null, "Fabricante B", "Ração Premier Golden Formula Cães Filhotes Carne e Arroz", 146, null, 1 });

            migrationBuilder.InsertData(
                table: "Pedidos",
                columns: new[] { "pedidoId", "clienteId", "codigoProduto", "dataPedido", "nomeProduto", "precoProduto", "produtoId", "qtdProduto" },
                values: new object[] { 1, 1, null, null, null, 20, 1, 0 });

            migrationBuilder.InsertData(
                table: "Pedidos",
                columns: new[] { "pedidoId", "clienteId", "codigoProduto", "dataPedido", "nomeProduto", "precoProduto", "produtoId", "qtdProduto" },
                values: new object[] { 2, 2, null, null, null, 150, 2, 0 });

            migrationBuilder.InsertData(
                table: "Pedidos",
                columns: new[] { "pedidoId", "clienteId", "codigoProduto", "dataPedido", "nomeProduto", "precoProduto", "produtoId", "qtdProduto" },
                values: new object[] { 3, 3, null, null, null, 146, 3, 0 });

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedido_clienteId",
                table: "ItensPedido",
                column: "clienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_clienteId",
                table: "Pedidos",
                column: "clienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_produtoId",
                table: "Pedidos",
                column: "produtoId");

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_associadoId",
                table: "Produtos",
                column: "associadoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comissoes");

            migrationBuilder.DropTable(
                name: "ItensPedido");

            migrationBuilder.DropTable(
                name: "Pedidos");

            migrationBuilder.DropTable(
                name: "Planos");

            migrationBuilder.DropTable(
                name: "Sac");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "Associados");
        }
    }
}
