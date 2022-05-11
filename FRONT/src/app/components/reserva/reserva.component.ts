import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listarProduto: IProduto[] = [];


  constructor(private carrinhoService : CarrinhoService) {

  }

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho() : void{
    this.carrinhoService.buscarTodos().subscribe(retorno => {
      this.listarProduto = retorno;
    })
  };

}