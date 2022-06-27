IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Associados] (
    [associadoId] int NOT NULL IDENTITY,
    [nomeCadAssociado] nvarchar(max) NULL,
    [telCadAssociado] nvarchar(max) NULL,
    [emailCadAssociado] nvarchar(max) NULL,
    [PasswordHash] varbinary(max) NULL,
    [PasswordSalt] varbinary(max) NULL,
    [cnpjCadAssociado] nvarchar(max) NULL,
    [enderecoCadAssociado] nvarchar(max) NULL,
    [associadoImagem] varbinary(max) NULL,
    [senhaCadAssociado] nvarchar(max) NULL,
    [Perfil] nvarchar(max) NULL DEFAULT N'Associado',
    CONSTRAINT [PK_Associados] PRIMARY KEY ([associadoId])
);
GO

CREATE TABLE [Clientes] (
    [clienteId] int NOT NULL IDENTITY,
    [nomeCadCliente] nvarchar(max) NULL,
    [cpfCadCliente] nvarchar(max) NULL,
    [enderecoCadCliente] nvarchar(max) NULL,
    [telCadCliente] nvarchar(max) NULL,
    [emailCadCliente] nvarchar(max) NULL,
    [PasswordHash] varbinary(max) NULL,
    [PasswordSalt] varbinary(max) NULL,
    [clienteImagem] varbinary(max) NULL,
    [senhaCadCliente] nvarchar(max) NULL,
    [Perfil] nvarchar(max) NULL DEFAULT N'Cliente',
    CONSTRAINT [PK_Clientes] PRIMARY KEY ([clienteId])
);
GO

CREATE TABLE [ComissoesAssociados] (
    [associadoId] int NOT NULL IDENTITY,
    [porcentagemComissao] float NOT NULL,
    [valorFixo] float NOT NULL,
    CONSTRAINT [PK_ComissoesAssociados] PRIMARY KEY ([associadoId])
);
GO

CREATE TABLE [ComissoesRegistros] (
    [comissoesregistroId] int NOT NULL,
    [associadoId] int NOT NULL,
    [pedidoId] int NOT NULL,
    [A] float NOT NULL,
    [BXC] float NOT NULL,
    [dataComissao] datetime2 NULL,
    [statusComissao] nvarchar(max) NULL
);
GO

CREATE TABLE [Sac] (
    [sacId] int NOT NULL IDENTITY,
    [problemaSac] nvarchar(max) NULL,
    [nomeSac] nvarchar(max) NULL,
    [telefoneSac] nvarchar(max) NULL,
    [emailSac] nvarchar(max) NULL,
    [descSac] nvarchar(max) NULL,
    CONSTRAINT [PK_Sac] PRIMARY KEY ([sacId])
);
GO

CREATE TABLE [Produtos] (
    [produtoId] int NOT NULL IDENTITY,
    [categoriaProduto] int NOT NULL,
    [codigoProduto] nvarchar(max) NULL,
    [nomeProduto] nvarchar(max) NULL,
    [fabricanteProduto] nvarchar(max) NULL,
    [qtdProduto] int NOT NULL,
    [produtoImagem] varbinary(max) NULL,
    [precoProduto] int NOT NULL,
    [descricaoProduto] nvarchar(max) NULL,
    [associadoId] int NOT NULL,
    [nomeCadAssociado] nvarchar(max) NULL,
    [emailCadAssociado] nvarchar(max) NULL,
    [telCadAssociado] nvarchar(max) NULL,
    CONSTRAINT [PK_Produtos] PRIMARY KEY ([produtoId]),
    CONSTRAINT [FK_Produtos_Associados_associadoId] FOREIGN KEY ([associadoId]) REFERENCES [Associados] ([associadoId])
);
GO

CREATE TABLE [ItensPedido] (
    [itemPedidoId] int NOT NULL IDENTITY,
    [associadoId] int NOT NULL,
    [nomeProduto] nvarchar(max) NULL,
    [codigoProduto] nvarchar(max) NULL,
    [fabricanteProduto] nvarchar(max) NULL,
    [produtoId] int NOT NULL,
    [qtdProduto] int NOT NULL,
    [precoProduto] int NOT NULL,
    [clienteId] int NOT NULL,
    [statusItemPedido] int NOT NULL,
    CONSTRAINT [PK_ItensPedido] PRIMARY KEY ([itemPedidoId]),
    CONSTRAINT [FK_ItensPedido_Clientes_clienteId] FOREIGN KEY ([clienteId]) REFERENCES [Clientes] ([clienteId]),
    CONSTRAINT [FK_ItensPedido_Produtos_produtoId] FOREIGN KEY ([produtoId]) REFERENCES [Produtos] ([produtoId])
);
GO

CREATE TABLE [Pedidos] (
    [pedidoId] int NOT NULL IDENTITY,
    [dataPedido] datetime2 NULL,
    [itemPedidoId] int NOT NULL,
    [produtoId] int NOT NULL,
    [nomeProduto] nvarchar(max) NULL,
    [codigoProduto] nvarchar(max) NULL,
    [qtdProduto] int NOT NULL,
    [precoProduto] int NOT NULL,
    [associadoId] int NOT NULL,
    [clienteId] int NOT NULL,
    [nomeCadCliente] nvarchar(max) NULL,
    [telCadCliente] nvarchar(max) NULL,
    [emailCadCliente] nvarchar(max) NULL,
    [statusPedido] int NOT NULL,
    CONSTRAINT [PK_Pedidos] PRIMARY KEY ([pedidoId]),
    CONSTRAINT [FK_Pedidos_Clientes_clienteId] FOREIGN KEY ([clienteId]) REFERENCES [Clientes] ([clienteId]),
    CONSTRAINT [FK_Pedidos_ItensPedido_itemPedidoId] FOREIGN KEY ([itemPedidoId]) REFERENCES [ItensPedido] ([itemPedidoId])
);
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'associadoId', N'PasswordHash', N'PasswordSalt', N'associadoImagem', N'cnpjCadAssociado', N'emailCadAssociado', N'enderecoCadAssociado', N'nomeCadAssociado', N'senhaCadAssociado', N'telCadAssociado') AND [object_id] = OBJECT_ID(N'[Associados]'))
    SET IDENTITY_INSERT [Associados] ON;
INSERT INTO [Associados] ([associadoId], [PasswordHash], [PasswordSalt], [associadoImagem], [cnpjCadAssociado], [emailCadAssociado], [enderecoCadAssociado], [nomeCadAssociado], [senhaCadAssociado], [telCadAssociado])
VALUES (1, NULL, NULL, NULL, N'1231134', N'rogerioemail@email.com', N'Rua do Associado A', N'Rogério', N'123456', NULL),
(2, NULL, NULL, NULL, N'1231134', N'emersonemail@email.com', N'Rua do Associado B', N'Emerson', N'123456', NULL),
(3, NULL, NULL, NULL, N'1231134', N'marioemail@email.com', N'Rua do Associado C', N'Mário', N'123456', NULL),
(4, NULL, NULL, NULL, N'1231134', N'associadod@associadod.com', N'Rua do Associado D', N'Associado D', N'123456', NULL),
(5, NULL, NULL, NULL, N'1231134', N'associadoe@associadoe.com', N'Rua do Associado E', N'Associado E', N'123456', NULL);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'associadoId', N'PasswordHash', N'PasswordSalt', N'associadoImagem', N'cnpjCadAssociado', N'emailCadAssociado', N'enderecoCadAssociado', N'nomeCadAssociado', N'senhaCadAssociado', N'telCadAssociado') AND [object_id] = OBJECT_ID(N'[Associados]'))
    SET IDENTITY_INSERT [Associados] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'clienteId', N'PasswordHash', N'PasswordSalt', N'clienteImagem', N'cpfCadCliente', N'emailCadCliente', N'enderecoCadCliente', N'nomeCadCliente', N'senhaCadCliente', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Clientes]'))
    SET IDENTITY_INSERT [Clientes] ON;
INSERT INTO [Clientes] ([clienteId], [PasswordHash], [PasswordSalt], [clienteImagem], [cpfCadCliente], [emailCadCliente], [enderecoCadCliente], [nomeCadCliente], [senhaCadCliente], [telCadCliente])
VALUES (1, NULL, NULL, NULL, N'12345678998', N'email@email.com', N'Rua do Cliente A', N'Cliente A', N'123456', N'11900000000'),
(2, NULL, NULL, NULL, N'12345678998', N'email@email.com', N'Rua do Cliente B', N'Cliente B', N'123456', N'11900000000'),
(3, NULL, NULL, NULL, N'12345678998', N'email@email.com', N'Rua do Cliente C', N'Cliente C', N'123456', N'11900000000'),
(4, NULL, NULL, NULL, N'12345678998', N'email@email.com', N'Rua do Cliente D', N'Cliente D', N'123456', N'11900000000'),
(5, NULL, NULL, NULL, N'12345678998', N'email@email.com', N'Rua do Cliente E', N'Cliente E', N'123456', N'11900000000');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'clienteId', N'PasswordHash', N'PasswordSalt', N'clienteImagem', N'cpfCadCliente', N'emailCadCliente', N'enderecoCadCliente', N'nomeCadCliente', N'senhaCadCliente', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Clientes]'))
    SET IDENTITY_INSERT [Clientes] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'associadoId', N'porcentagemComissao', N'valorFixo') AND [object_id] = OBJECT_ID(N'[ComissoesAssociados]'))
    SET IDENTITY_INSERT [ComissoesAssociados] ON;
INSERT INTO [ComissoesAssociados] ([associadoId], [porcentagemComissao], [valorFixo])
VALUES (1, 20.0E0, 150.0E0),
(2, 15.0E0, 150.0E0),
(3, 10.0E0, 150.0E0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'associadoId', N'porcentagemComissao', N'valorFixo') AND [object_id] = OBJECT_ID(N'[ComissoesAssociados]'))
    SET IDENTITY_INSERT [ComissoesAssociados] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'itemPedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'fabricanteProduto', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusItemPedido') AND [object_id] = OBJECT_ID(N'[ItensPedido]'))
    SET IDENTITY_INSERT [ItensPedido] ON;
INSERT INTO [ItensPedido] ([itemPedidoId], [associadoId], [clienteId], [codigoProduto], [fabricanteProduto], [nomeProduto], [precoProduto], [produtoId], [qtdProduto], [statusItemPedido])
VALUES (3, 0, 2, N'8786237', N'FabricanteC', N'ProdutoC', 298, 4, 28, 0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'itemPedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'fabricanteProduto', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusItemPedido') AND [object_id] = OBJECT_ID(N'[ItensPedido]'))
    SET IDENTITY_INSERT [ItensPedido] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'produtoId', N'associadoId', N'categoriaProduto', N'codigoProduto', N'descricaoProduto', N'emailCadAssociado', N'fabricanteProduto', N'nomeCadAssociado', N'nomeProduto', N'precoProduto', N'produtoImagem', N'qtdProduto', N'telCadAssociado') AND [object_id] = OBJECT_ID(N'[Produtos]'))
    SET IDENTITY_INSERT [Produtos] ON;
INSERT INTO [Produtos] ([produtoId], [associadoId], [categoriaProduto], [codigoProduto], [descricaoProduto], [emailCadAssociado], [fabricanteProduto], [nomeCadAssociado], [nomeProduto], [precoProduto], [produtoImagem], [qtdProduto], [telCadAssociado])
VALUES (1, 1, 14, N'10001310000310', N'Descrição da ração golden adultos', N'rogerioemail@email.com', N'Fabricante A', N'Rogério', N'Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz', 20, NULL, 5, N'11987720983'),
(2, 2, 16, N'10001320000030', N'Descrição do produto Golden seca filhote', N'emersonemail@email.com', N'Fabricante B', N'Emerson', N'Ração Seca PremieR Pet Golden Mega Cães Filhotes Raças Grandes Frango e Arroz', 150, NULL, 1, N'11976650912'),
(3, 3, 15, N'31082009878971', N'Descrição do produto Golden premier', N'marioemail@email.com', N'Fabricante B', N'Mário', N'Ração Premier Golden Formula Cães Filhotes Carne e Arroz', 146, NULL, 1, N'11954328761');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'produtoId', N'associadoId', N'categoriaProduto', N'codigoProduto', N'descricaoProduto', N'emailCadAssociado', N'fabricanteProduto', N'nomeCadAssociado', N'nomeProduto', N'precoProduto', N'produtoImagem', N'qtdProduto', N'telCadAssociado') AND [object_id] = OBJECT_ID(N'[Produtos]'))
    SET IDENTITY_INSERT [Produtos] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'itemPedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'fabricanteProduto', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusItemPedido') AND [object_id] = OBJECT_ID(N'[ItensPedido]'))
    SET IDENTITY_INSERT [ItensPedido] ON;
INSERT INTO [ItensPedido] ([itemPedidoId], [associadoId], [clienteId], [codigoProduto], [fabricanteProduto], [nomeProduto], [precoProduto], [produtoId], [qtdProduto], [statusItemPedido])
VALUES (2, 0, 3, N'0998981', N'FabricanteB', N'ProdutoB', 870, 2, 76, 0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'itemPedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'fabricanteProduto', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusItemPedido') AND [object_id] = OBJECT_ID(N'[ItensPedido]'))
    SET IDENTITY_INSERT [ItensPedido] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'itemPedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'fabricanteProduto', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusItemPedido') AND [object_id] = OBJECT_ID(N'[ItensPedido]'))
    SET IDENTITY_INSERT [ItensPedido] ON;
INSERT INTO [ItensPedido] ([itemPedidoId], [associadoId], [clienteId], [codigoProduto], [fabricanteProduto], [nomeProduto], [precoProduto], [produtoId], [qtdProduto], [statusItemPedido])
VALUES (1, 0, 1, N'1209128', N'FabricanteA', N'ProdutoA', 120, 3, 95, 0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'itemPedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'fabricanteProduto', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusItemPedido') AND [object_id] = OBJECT_ID(N'[ItensPedido]'))
    SET IDENTITY_INSERT [ItensPedido] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'pedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'dataPedido', N'emailCadCliente', N'itemPedidoId', N'nomeCadCliente', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusPedido', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Pedidos]'))
    SET IDENTITY_INSERT [Pedidos] ON;
INSERT INTO [Pedidos] ([pedidoId], [associadoId], [clienteId], [codigoProduto], [dataPedido], [emailCadCliente], [itemPedidoId], [nomeCadCliente], [nomeProduto], [precoProduto], [produtoId], [qtdProduto], [statusPedido], [telCadCliente])
VALUES (1, 1, 1, N'1209128', NULL, N'clienteAemail@email.com', 1, N'ClienteA', N'ProdutoA', 90, 1, 12, 0, N'11967676623');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'pedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'dataPedido', N'emailCadCliente', N'itemPedidoId', N'nomeCadCliente', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusPedido', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Pedidos]'))
    SET IDENTITY_INSERT [Pedidos] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'pedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'dataPedido', N'emailCadCliente', N'itemPedidoId', N'nomeCadCliente', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusPedido', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Pedidos]'))
    SET IDENTITY_INSERT [Pedidos] ON;
INSERT INTO [Pedidos] ([pedidoId], [associadoId], [clienteId], [codigoProduto], [dataPedido], [emailCadCliente], [itemPedidoId], [nomeCadCliente], [nomeProduto], [precoProduto], [produtoId], [qtdProduto], [statusPedido], [telCadCliente])
VALUES (2, 2, 2, N'0998981', NULL, N'clienteBemail@email.com', 1, N'ClienteB', N'ProdutoB', 40, 2, 8, 0, N'11976123431');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'pedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'dataPedido', N'emailCadCliente', N'itemPedidoId', N'nomeCadCliente', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusPedido', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Pedidos]'))
    SET IDENTITY_INSERT [Pedidos] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'pedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'dataPedido', N'emailCadCliente', N'itemPedidoId', N'nomeCadCliente', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusPedido', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Pedidos]'))
    SET IDENTITY_INSERT [Pedidos] ON;
INSERT INTO [Pedidos] ([pedidoId], [associadoId], [clienteId], [codigoProduto], [dataPedido], [emailCadCliente], [itemPedidoId], [nomeCadCliente], [nomeProduto], [precoProduto], [produtoId], [qtdProduto], [statusPedido], [telCadCliente])
VALUES (3, 3, 3, N'8786237', NULL, N'clienteCemail@email.com', 1, N'ClienteC', N'ProdutoC', 120, 3, 23, 0, N'11986211245');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'pedidoId', N'associadoId', N'clienteId', N'codigoProduto', N'dataPedido', N'emailCadCliente', N'itemPedidoId', N'nomeCadCliente', N'nomeProduto', N'precoProduto', N'produtoId', N'qtdProduto', N'statusPedido', N'telCadCliente') AND [object_id] = OBJECT_ID(N'[Pedidos]'))
    SET IDENTITY_INSERT [Pedidos] OFF;
GO

CREATE INDEX [IX_ItensPedido_clienteId] ON [ItensPedido] ([clienteId]);
GO

CREATE INDEX [IX_ItensPedido_produtoId] ON [ItensPedido] ([produtoId]);
GO

CREATE INDEX [IX_Pedidos_clienteId] ON [Pedidos] ([clienteId]);
GO

CREATE INDEX [IX_Pedidos_itemPedidoId] ON [Pedidos] ([itemPedidoId]);
GO

CREATE INDEX [IX_Produtos_associadoId] ON [Produtos] ([associadoId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220614171947_TesteLucas', N'5.0.15');
GO

COMMIT;
GO

