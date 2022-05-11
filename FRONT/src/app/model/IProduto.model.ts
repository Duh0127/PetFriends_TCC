//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IProduto {
    id?: number;
    nomeProduto: string;
    qtdProduto: number;
    precoProduto: number;
    assocProduto: string;
    descProduto: string;

  }