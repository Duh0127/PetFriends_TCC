import { IItemPedido } from './../../model/IItemPedido.model';
import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { BehaviorSubject } from 'rxjs';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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



  form!: UntypedFormGroup;

  listarCliente: ICadastroCliente[] = [];
  public listarProduto: any = [];
  public grandTotal : number = 0;


  constructor(private carrinhoService : CarrinhoService,
              private pedidoService: PedidoService,
              private cadastroClienteService: CadastroClienteService,
              private formBuilder: UntypedFormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.carregarItemPedido();
  }

  carregarItemPedido(): void{
    this.carrinhoService.buscarByUser(0).subscribe(retorno => {
      this.listarProduto = retorno;
    })
  }

  deletarItemPedido(itemPedido: IItemPedido) {
    Swal.fire({
      icon: 'warning',
      title: 'Confirma a exclusão do(a) ' + itemPedido.nomeProduto + '?',
      text: 'Esta ação não poderá ser desfeita',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#ffd13a'
    })
    .then(result => {
      if(result.value){
        this.carrinhoService.excluirItemPedido(itemPedido.itemPedidoId).subscribe(produto => {
          if (produto) {
            Swal.fire({icon: 'success',
              title: 'Produto Deletado com Sucesso',
              text: 'Tudo certo!',
              showConfirmButton: true,
              confirmButtonColor: '#ffd13a'});
          } else {
            Swal.fire({icon: 'error',
              title: 'Falha ao Deletar Produto',
              text: 'Algo deu errado',
              showConfirmButton: true,
              confirmButtonColor: '#ffd13a'});
          }
          this.carregarItemPedido();
         });
      }
    })
  };


  salvarCadastroPedido(produto: any) {

    this.pedidoService.cadastrar(produto).subscribe(cadastro => {
      if (cadastro) {
        Swal.fire({icon: 'success',
          title: 'Pedido efetuado com sucesso!',
          text: 'Espere o Associado entrar em contato.',
          showConfirmButton: true,
          confirmButtonColor: '#ffd13a'});
      } else {
        Swal.fire({icon: 'error',
          title: 'Falha ao efetuar reserva',
          text: 'Algo deu errado',
          showConfirmButton: true,
          confirmButtonColor: '#ffd13a'});
      }
      this.carregarItemPedido();
      }, error => {
     console.log(error);
     Swal.fire({icon: 'error',
      title: 'Erro no sistema',
      showConfirmButton: true,
      confirmButtonColor: '#ffd13a',});
   });


  }


}
