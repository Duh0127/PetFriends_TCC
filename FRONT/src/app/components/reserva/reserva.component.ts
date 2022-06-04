import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {


  // produto: IProduto = {
  //   produtoId: 0,
  //   associadoId: 0,
  //   nomeProduto: '',
  //   codigoProduto: '',
  //   qtdProduto: 0,
  //   precoProduto: 0,
  //   fabricanteProduto: '',
  //   descricaoProduto: '',
  //   produtoReservado: false,
  // };

  public listarProduto: any = [];
  public grandTotal : number = 0;

  constructor(private carrinhoService : CarrinhoService) {

  }

  ngOnInit(): void {
    // this.carregarCarrinho();
    this.carrinhoService.getProducts().subscribe(
      res => {
        this.listarProduto = res;
        this.grandTotal = this.carrinhoService.getTotalPrice();
      })
  }

  removeItem(produto : any){
    this.carrinhoService.removeCartItem(produto);
  }

  emptycart(){
    this.carrinhoService.removeAllCart();
  }

  // carregarCarrinho() : void{
  //   this.carrinhoService.buscarTodos().subscribe(retorno => {
  //     this.listarProduto = retorno;
  //   })
  // };

}
