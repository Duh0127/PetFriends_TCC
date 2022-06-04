import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPedido } from 'src/app/model/IPedido.model';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import Swal from 'sweetalert2';


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

  listarCliente: ICadastroCliente[] = [];
  public listarProduto: any = [];
  public grandTotal : number = 0;


  constructor(private carrinhoService : CarrinhoService,
              private pedidoService: PedidoService,
              private cadastroClienteService: CadastroClienteService,
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

    this.pedidoService.cadastrar(produto).subscribe(cadastro => {
      if (cadastro) {
        Swal.fire({icon: 'success',
          title: 'Pedido efetuado com sucesso!',
          text: 'Entre em contato com o Associado responsável pelo produto, e informe o número do pedido.',
          showConfirmButton: true,
          confirmButtonColor: '#ffd13a'});
          this.carrinhoService.removeCartItem(produto);
      } else {
        Swal.fire({icon: 'error',
          title: 'Falha ao efetuar reserva',
          text: 'Algo deu errado',
          showConfirmButton: true,
          confirmButtonColor: '#ffd13a'});
      }
   }, error => {
     console.log(error);
     //alert('mais um erro de cria');
     Swal.fire({icon: 'error',
      title: 'Erro no sistema',
      showConfirmButton: true,
      confirmButtonColor: '#ffd13a',});
   });


  }

  // carregarCarrinho() : void{
  //   this.carrinhoService.buscarTodos().subscribe(retorno => {
  //     this.listarProduto = retorno;
  //   })
  // };

}
