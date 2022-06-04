import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { IPedido } from 'src/app/model/IPedido.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
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

  constructor(
    private cadastroService: CadastroAssociadoService,
    private cadastroClienteService: CadastroClienteService,
    private pedidoService: PedidoService,
    private produtosService: ProdutosService,
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarUsuario();
    this.carregarPedidos();
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
    this.pedidoService.buscarTodos().subscribe(retorno => {
      this.listarPedidos = retorno;
    })
  };

  deletarProdutos(produto: IProduto) {    
    Swal.fire({
      icon: 'warning',
      title: 'Confirma a exclusão do(a) ' + produto.nomeProduto + '?',
      text: 'Esta ação não pode ser desfeita',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    })
    .then(result => {
      if(result.value){
        this.produtosService.excluir(produto.produtoId).subscribe(produto => {
          if (produto) {
            Swal.fire('Produto Deletado com Sucesso', 'Tudo certo', 'success');
          } else {
            Swal.fire('Falha ao Deletar Produto', 'Algo deu errado', 'error');
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
      cancelButtonText: 'Não'
    }).then(result => {
      if(result.value)
      {
        this.pedidoService.excluir(pedido.pedidoId).subscribe(produto => {
          if (produto) {
            alert('Pedido Deletado com Sucesso');
            Swal.fire('Pedido Deletado com Sucesso', 'Não precisa mais aguardar', 'success');
            window.location.reload();
          } else {
            Swal.fire('Falha ao Deletar Pedido', 'Algo deu errado', 'error');
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
