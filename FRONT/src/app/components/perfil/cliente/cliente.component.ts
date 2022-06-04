import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
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

  constructor(private cadastroService: CadastroClienteService,
    private produtosService: ProdutosService,
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarUsuario();
  }

  carregarUsuario() : void{
    this.cadastroService.buscarByUser().subscribe(retorno => {
      this.listarCliente = retorno;
    })
  }

  carregarProdutos() : void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listarProdutos = retorno;
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
