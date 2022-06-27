//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IItemPedido {

  itemPedidoId: number;
  produtoId: number;
  clienteId: number;
  nomeProduto: string;
  codigoProduto: string;
  qtdProduto: number;
  precoProduto: number;
  statusItemPedido: number;

}
