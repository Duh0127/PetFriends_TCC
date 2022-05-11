//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IProduto {
    produtoId?: number;
    codigo: string;
    nome: string;
    quantidade: number;
    preco: number;
    fabricante: string;

  }