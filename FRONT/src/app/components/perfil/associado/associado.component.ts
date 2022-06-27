import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { IComissaoRegistro } from 'src/app/model/IComissaoRegistro.model';
import { IPedido } from 'src/app/model/IPedido.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import { ComissaoRegistroService } from 'src/app/services/comissaoregistro.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-associado',
  templateUrl: './associado.component.html',
  styleUrls: ['./associado.component.css']
})
export class AssociadoComponent implements OnInit {

  cadastro: ICadastroAssociado = {
    associadoId: 0,
    nomeCadAssociado: '',
    enderecoCadAssociado: '',
    emailCadAssociado: '',
    telCadAssociado: '',
    cnpjCadAssociado: '',
    senhaCadAssociado: ''
  };

  listarCliente: ICadastroCliente[] = [];
  listarAssociado: ICadastroAssociado[] = [];
  listarProdutos: IProduto[] = [];
  listarPedidos: IPedido[] = [];
  listarComissoes: IComissaoRegistro[] = [];

  constructor(
    private cadastroService: CadastroAssociadoService,
    private cadastroClienteService: CadastroClienteService,
    private pedidoService: PedidoService,
    private comissaoRegistroService: ComissaoRegistroService,
    private produtosService: ProdutosService,
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarUsuario();
    this.carregarPedidos();
    this.carregarComissoes();
  };

  carregarUsuario() : void{
    this.cadastroService.buscarByUser().subscribe(retorno => {
      this.listarAssociado = retorno;
    })
  }


  carregarProdutos() : void{
    this.produtosService.buscarByUser().subscribe(retorno => {
      this.listarProdutos = retorno;
    })
  };

  carregarPedidos() : void{
    this.pedidoService.buscarByUserStatus(1).subscribe(retorno => {
      this.listarPedidos = retorno;
    })
  };

  carregarComissoes() : void{
    this.comissaoRegistroService.buscarByUser().subscribe(retorno => {
      this.listarComissoes = retorno;
    })
  };

  deletarProdutos(produto: IProduto) {
    Swal.fire({
      icon: 'warning',
      title: 'Confirma a exclusão do(a) ' + produto.nomeProduto + '?',
      text: 'Esta ação não pode ser desfeita',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#ffd13a'
    })
    .then(result => {
      if(result.value){
        this.produtosService.excluir(produto.produtoId).subscribe(produto => {
          if (produto) {
            Swal.fire({icon: 'success',
            title: 'Produto deletado com sucesso!',
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
           this.carregarProdutos();
         });
      }
    })
  };

   deletarPedidos(pedido: IPedido) {
    Swal.fire({
      icon: 'warning',
      title: 'Confirma a exclusão do(a) ' + pedido.pedidoId + '?',
      text: 'Esta ação não pode ser desfeita',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
     confirmButtonColor: '#ffd13a'
    }).then(result => {
      if(result.value)
      {
        this.pedidoService.excluir(pedido.pedidoId).subscribe(produto => {
          if (produto) {
            Swal.fire({icon: 'success',
            title: 'Pedido deletado com sucesso!',
            text: 'Não precisa mais aguardar',
            showConfirmButton: true,
            confirmButtonColor: '#ffd13a'});
            window.location.reload();
          } else {
            Swal.fire({icon: 'error',
              title: 'Falha ao deletar pedido',
              text: 'Algo deu errado',
              showConfirmButton: true,
              confirmButtonColor: '#ffd13a'
            });
          }
           this.carregarPedidos();
         });
      }
    })

  };


  salvarCadastroAssoc(): void {
    this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
      this.cadastro = retorno;
    });
    this.router.navigate(['']);
  };

  sair(){
    this.autenticacaoService.LimparToken();
    this.router.navigate(["/login-cliente"])
  }


}
