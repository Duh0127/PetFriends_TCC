import { environment } from 'src/environments/environment';
import { ProdutosService } from './../../services/home.service';
import { IProduto } from './../../model/IProduto.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() produto!: IProduto

  public listarProdutos: any ;
  searchKey:string = "";


  constructor(private produtosService : ProdutosService,
              private carrinhoService: CarrinhoService,
              private activatedRouter: ActivatedRoute,
              private router: Router){

  }

  ngOnInit(): void {

     this.produtosService.buscarTodos().subscribe( res => {
        this.listarProdutos = res;

     this.listarProdutos.forEach((a:any) => {
       Object.assign(a, {qtdProduto: 1, total: a.precoProduto});
       });
     });
     this.carrinhoService.search.subscribe((val:any) => {
       this.searchKey = val;
     })

   }


   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
   }



   salvarItemPedido(produto: any) {
     this.carrinhoService.cadastrarItemPedido(produto).subscribe(cadastro => {
        if (cadastro) {
          Swal.fire({icon: 'success',
            title: 'Produto adicionado ao Carrinho!',
            timer: 3800,
            showCancelButton: false,
            })
          this.router.navigate(["/reserva"])
        }
      },
      error => {
        console.log(error);
        Swal.fire({icon: 'error',
        title: 'Erro no sistema',
        showConfirmButton: false,
        timer: 1800
        });
      }
    );
   }


  prodFoto(): String | null {
    return environment.UrlPrincipal + this.produto.produtoImagem
  }












}
