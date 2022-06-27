//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IPedido {

  pedidoId: number;
  produtoId: number;
  clienteId: number;
  itemPedidoId: number;
  nomeCadCliente: string;
  telCadCliente: string;
  emailCadCliente: string;
  nomeProduto: string;
  codigoProduto: string;
  qtdProduto: number;
  dataPedido: Date;
  precoProduto: number;
  statusPedido: number;
  //grandTotal: number;
  
  }
  