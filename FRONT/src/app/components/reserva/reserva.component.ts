import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPedido } from 'src/app/model/IPedido.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  //pedidoForm!: FormGroup;

  form!: FormGroup;


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

  constructor(private carrinhoService : CarrinhoService,
              private formBuilder: FormBuilder,
              private router: Router) {

              //this.pedidoForm();

  }

  ngOnInit(): void {
    // this.carregarCarrinho();
    this.carrinhoService.getProducts().subscribe(
      res => {
        this.listarProduto = res;
        this.grandTotal = this.carrinhoService.getTotalPrice();

        // this.pedidoForm = this.formBuilder.group(
        //   {
        //     pedidoId: ['', [Validators]],
        //     produtoId:['', [Validators]],
        //     nomeProduto: ['', [Validators]],
        //     codigoProduto: ['', [Validators]],
        //     qtdProduto: ['', [Validators]],
        //     dataPedido: ['', [Validators]],
        //     precoProduto: ['', [Validators]],
        //     grandTotal: ['', [Validators]]
            
        //   });
      })
  }

  removeItem(produto : any){
    this.carrinhoService.removeCartItem(produto);
  }

  emptycart(){
    this.carrinhoService.removeAllCart();
  }

  // comprarItem(produto : any)
  // {
  //   this.carrinhoService.cadastrar(produto);
  // }

  // pedidoForm() {
  //   this.form = this.formBuilder.group({
     
  //         pedidoId: [''],
  //         produtoId:[''],
  //         nomeProduto: [''],
  //         codigoProduto: [''],
  //         qtdProduto: [''],
  //         dataPedido: [''],
  //         precoProduto: [''],
  //         grandTotal: ['']
          
  //       });
  //   }
  

  salvarCadastroPedido(produto: any) {

    this.carrinhoService.cadastrar(produto).subscribe(cadastro => {
      if (cadastro) {
        alert('Pedido efetuado com sucesso!');
        this.router.navigate(['/reserva']);
      } else {
        alert('Parabéns SQL');
      }
   }, error => {
     console.log(error);
     alert('mais um erro de cria');
   });
    // this.router.navigate(['']);
  }

  // carregarCarrinho() : void{
  //   this.carrinhoService.buscarTodos().subscribe(retorno => {
  //     this.listarProduto = retorno;
  //   })
  // };

}
