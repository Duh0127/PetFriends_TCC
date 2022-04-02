import { CarrinhoService } from './../../services/carrinho.service';
import { IProdutoCarrinho } from './../../model/IProdutoCarrinho.model';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listarCarrinho: IProdutoCarrinho[] = [];


  constructor(private carrinhoService : CarrinhoService) {

  }

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho() : void{
    this.carrinhoService.buscarTodos().subscribe(retorno => {
      this.listarCarrinho = retorno;
    })
  };

}