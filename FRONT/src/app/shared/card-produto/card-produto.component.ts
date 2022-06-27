import { ProdutosService } from './../../services/produtos.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() precoProduto: number = 0;
  @Input() associados: string = '';


  public listarProdutos: any ;

  constructor(private produtosService : ProdutosService,
              private carrinhoService: CarrinhoService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {


    this.produtosService.buscarTodos().subscribe( res => {
      this.listarProdutos = res;

    this.listarProdutos.forEach((a:any) => {
      Object.assign(a, {qtdProduto: 1, total: a.precoProduto});
      });
    })
  }




}
