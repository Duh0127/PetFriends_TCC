import { ProdutosService } from './../../services/produtos.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})


export class CardProdutoComponent implements OnInit {


  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() precoProduto: number = 0;
  @Input() associados: string = '';
  
  listarProdutos: IProduto[] = [];
  

  constructor(private produtosService : ProdutosService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
    }

    carregarProdutos() : void{
      this.produtosService.buscarTodos().subscribe(retorno => {
        this.listarProdutos = retorno;
      })
    };





}
