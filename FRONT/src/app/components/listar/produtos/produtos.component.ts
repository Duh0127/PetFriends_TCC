import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  listarProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos() : void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listarProdutos = retorno;
    })
  };

  //Ã© preciso de ! depois do id, pois o id pode ser null
  deletar(produto: IProduto) : void {

    this.produtosService.excluir(produto.id!).subscribe(() => {

      this.carregarProdutos();

    });
  };

}
