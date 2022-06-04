import { ProdutosService } from './../../services/home.service';
import { IProduto } from './../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listarProdutos: any ;





  constructor(private produtosService : ProdutosService,
              private carrinhoService: CarrinhoService,
              private activatedRouter: ActivatedRoute,
              private router: Router){

  }

  ngOnInit(): void {
   // this.carregarProdutos();

    this.produtosService.buscarTodos().subscribe( res => {
      this.listarProdutos = res;

    this.listarProdutos.forEach((a:any) => {
      Object.assign(a, {qtdProduto: 1, total: a.precoProduto});
      });
    })
}

    // carregarProdutos() : void{
    //   this.produtosService.buscarTodos().subscribe(retorno => {
    //     this.listarProdutos = retorno;
    //   })
    // };

    addtoCart(produto : any){
      this.carrinhoService.addtoCar(produto);
    }



















  }
