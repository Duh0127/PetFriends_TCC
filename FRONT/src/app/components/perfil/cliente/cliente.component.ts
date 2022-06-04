import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { IPedido } from 'src/app/model/IPedido.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  


  cadastro: ICadastroCliente = {
    clienteId: 0,
    nomeCadCliente: '',
    enderecoCadCliente: '',
    emailCadCliente: '',
    telCadCliente: '',
    cpfCadCliente: '',
    senhaCadCliente: ''
  };

  listarCliente: ICadastroCliente[] = [];
  listarProdutos: IProduto[] = [];
  listarPedidos: IPedido[] = [];

  constructor(private cadastroService: CadastroClienteService,
    private produtosService: ProdutosService,
    private pedidoService: PedidoService, 
    private autenticacaoService: AutenticacaoService,
    private carrinhoService: CarrinhoService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarUsuario();
    this.carregarPedidos();
  }

  carregarUsuario() : void{
    this.cadastroService.buscarByUser().subscribe(retorno => {
      this.listarCliente = retorno;
    })
  }

  carregarPedidos() : void{
    this.pedidoService.buscarByUser().subscribe(retorno => {
      this.listarPedidos = retorno;
    })
  };

  salvarCadastroCliente(): void {
    this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
      this.cadastro = retorno;
    });
    this.router.navigate(['']);
  }

  sair(){
    this.autenticacaoService.LimparToken();
    this.router.navigate(["/login-cliente"])
  }
}
