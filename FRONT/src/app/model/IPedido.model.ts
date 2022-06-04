//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IPedido {

    pedidoId: number;
    produtoId: number;
    nomeProduto: string;
    codigoProduto: string;
    qtdProduto: number;
    dataPedido: Date;
    precoProduto: number;
    grandTotal: number;
  
  }
  