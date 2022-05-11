import { ProdutosService } from './../../services/home.service';
import { IProduto } from './../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listarProdutos: IProduto[] = [];

  produtoHome: IProduto = {
    //imgProduto
    nome: '',
    codigo: '',
    preco: 0,
    quantidade: 0,
    fabricante: '',

  };

  constructor(private produtosService : ProdutosService,
              private activatedRouter: ActivatedRoute,
              private router: Router){

  }

  ngOnInit(): void {
    this.carregarProdutos();
    }

    carregarProdutos() : void{
      this.produtosService.buscarTodos().subscribe(retorno => {
        this.listarProdutos = retorno;
      })
    };



















  }