//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IProduto {

  produtoId: number;
  associadoId: number;
  categoriaProduto: number;
  codigoProduto: string;
  nomeProduto: string;
  qtdProduto: number;
  precoProduto: number;
  fabricanteProduto: string;
  descricaoProduto: string;
  produtoImagem: any;
  //produtoReservado: boolean;

}
