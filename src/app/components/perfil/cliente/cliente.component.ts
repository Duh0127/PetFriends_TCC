import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { IServico } from 'src/app/model/IServico.model';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listarProdutos: IProduto[] = [];
  listarServicos: IServico[] = [];

  cadastro: ICadastroCliente = {
    nomeCadCliente: '',
    enderecoCadCliente: '',
    emailCadCliente: '',
    telCadCliente: '',
    cpfCadCliente: 0,
    senhaCadCliente: '',
    confsenhaCadCliente: ''
  };

  constructor(private cadastroService: CadastroClienteService,
    private servicosService: ServicosService,
    private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarServicos();
    this.carregarProdutos();
    
  }

  carregarServicos() : void{
    this.servicosService.buscarTodos().subscribe(retorno => {
      this.listarServicos = retorno;
    })
  };

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

}
