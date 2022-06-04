using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApiTcc.Migrations
{
    public partial class Teste1 : Migration
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
                name: "ComissoesAssociados",
                columns: table => new
                {
                    associadoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    porcentagemComissao = table.Column<double>(type: "float", nullable: false),
                    valorFixo = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComissoesAssociados", x => x.associadoId);
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
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    produtoId = table.Column<int>(type: "int", nullable: false),
                    qtdProduto = table.Column<int>(type: "int", nullable: false),
                    precoProduto = table.Column<double>(type: "float", nullable: false),
                    associadoId = table.Column<int>(type: "int", nullable: false),
                    clienteId = table.Column<int>(type: "int", nullable: false)
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
                    table.ForeignKey(
                        name: "FK_ItensPedido_Produtos_produtoId",
                        column: x => x.produtoId,
                        principalTable: "Produtos",
                        principalColumn: "produtoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pedidos",
                columns: table => new
                {
                    pedidoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dataPedido = table.Column<DateTime>(type: "datetime2", nullable: true),
                    valortotalPedido = table.Column<double>(type: "float", nullable: false),
                    itemPedidoId = table.Column<int>(type: "int", nullable: false),
                    clienteId = table.Column<int>(type: "int", nullable: false),
                    produtoId = table.Column<int>(type: "int", nullable: false),
                    associadoId = table.Column<int>(type: "int", nullable: false),
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StatusPedido = table.Column<int>(type: "int", nullable: false)
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
                        name: "FK_Pedidos_ItensPedido_itemPedidoId",
                        column: x => x.itemPedidoId,
                        principalTable: "ItensPedido",
                        principalColumn: "itemPedidoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Associados",
                columns: new[] { "associadoId", "PasswordHash", "PasswordSalt", "associadoImagem", "cnpjCadAssociado", "emailCadAssociado", "enderecoCadAssociado", "nomeCadAssociado", "senhaCadAssociado", "telCadAssociado" },
                values: new object[,]
                {
                    { 1, null, null, null, "1231134", "associadoa@associadoa.com", "Rua do Associado A", "Associado A", "123456", null },
                    { 2, null, null, null, "1231134", "associadob@associadob.com", "Rua do Associado B", "Associado B", "123456", null },
                    { 3, null, null, null, "1231134", "associadoc@associadoc.com", "Rua do Associado C", "Associado C", "123456", null },
                    { 4, null, null, null, "1231134", "associadod@associadod.com", "Rua do Associado D", "Associado D", "123456", null },
                    { 5, null, null, null, "1231134", "associadoe@associadoe.com", "Rua do Associado E", "Associado E", "123456", null }
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
                table: "ComissoesAssociados",
                columns: new[] { "associadoId", "porcentagemComissao", "valorFixo" },
                values: new object[,]
                {
                    { 1, 20.0, 150.0 },
                    { 2, 15.0, 150.0 },
                    { 3, 10.0, 150.0 }
                });

            migrationBuilder.InsertData(
                table: "ItensPedido",
                columns: new[] { "itemPedidoId", "associadoId", "clienteId", "codigoProduto", "nomeProduto", "precoProduto", "produtoId", "qtdProduto" },
                values: new object[] { 3, 3, 2, "8786237", "ProdutoC", 298.0, 4, 28 });

            migrationBuilder.InsertData(
                table: "Produtos",
                columns: new[] { "produtoId", "associadoId", "codigoProduto", "descricaoProduto", "fabricanteProduto", "nomeProduto", "precoProduto", "produtoImagem", "qtdProduto" },
                values: new object[,]
                {
                    { 1, 1, "10001310000310", "Descrição da ração golden adultos", "Fabricante A", "Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz", 20, null, 5 },
                    { 2, 2, "10001320000030", "Descrição do produto Golden seca filhote", "Fabricante B", "Ração Seca PremieR Pet Golden Mega Cães Filhotes Raças Grandes Frango e Arroz", 150, null, 1 },
                    { 3, 3, "31082009878971", "Descrição do produto Golden premier", "Fabricante B", "Ração Premier Golden Formula Cães Filhotes Carne e Arroz", 146, null, 1 }
                });

            migrationBuilder.InsertData(
                table: "ItensPedido",
                columns: new[] { "itemPedidoId", "associadoId", "clienteId", "codigoProduto", "nomeProduto", "precoProduto", "produtoId", "qtdProduto" },
                values: new object[] { 2, 2, 3, "0998981", "ProdutoB", 870.0, 2, 76 });

            migrationBuilder.InsertData(
                table: "ItensPedido",
                columns: new[] { "itemPedidoId", "associadoId", "clienteId", "codigoProduto", "nomeProduto", "precoProduto", "produtoId", "qtdProduto" },
                values: new object[] { 1, 1, 1, "1209128", "ProdutoA", 120.0, 3, 95 });

            migrationBuilder.InsertData(
                table: "Pedidos",
                columns: new[] { "pedidoId", "StatusPedido", "associadoId", "clienteId", "codigoProduto", "dataPedido", "itemPedidoId", "nomeProduto", "produtoId", "valortotalPedido" },
                values: new object[] { 1, 0, 1, 1, "1209128", null, 1, "ProdutoA", 1, 200.0 });

            migrationBuilder.InsertData(
                table: "Pedidos",
                columns: new[] { "pedidoId", "StatusPedido", "associadoId", "clienteId", "codigoProduto", "dataPedido", "itemPedidoId", "nomeProduto", "produtoId", "valortotalPedido" },
                values: new object[] { 2, 0, 2, 2, "0998981", null, 1, "ProdutoB", 2, 150.0 });

            migrationBuilder.InsertData(
                table: "Pedidos",
                columns: new[] { "pedidoId", "StatusPedido", "associadoId", "clienteId", "codigoProduto", "dataPedido", "itemPedidoId", "nomeProduto", "produtoId", "valortotalPedido" },
                values: new object[] { 3, 0, 3, 3, "8786237", null, 1, "ProdutoC", 3, 146.0 });

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedido_clienteId",
                table: "ItensPedido",
                column: "clienteId");

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedido_produtoId",
                table: "ItensPedido",
                column: "produtoId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_clienteId",
                table: "Pedidos",
                column: "clienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_itemPedidoId",
                table: "Pedidos",
                column: "itemPedidoId");

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_associadoId",
                table: "Produtos",
                column: "associadoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ComissoesAssociados");

            migrationBuilder.DropTable(
                name: "Pedidos");

            migrationBuilder.DropTable(
                name: "Sac");

            migrationBuilder.DropTable(
                name: "ItensPedido");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "Associados");
        }
    }
}
