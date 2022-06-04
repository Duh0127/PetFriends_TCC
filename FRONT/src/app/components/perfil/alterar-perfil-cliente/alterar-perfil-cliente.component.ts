  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
  import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
  import { CadastroClienteService } from 'src/app/services/cadcliente.service';
  import { ProdutosService } from 'src/app/services/produtos.service';



@Component({
  selector: 'app-alterar-perfil-cliente',
  templateUrl: './alterar-perfil-cliente.component.html',
  styleUrls: ['./alterar-perfil-cliente.component.css']
})
export class AlterarPerfilClienteComponent implements OnInit {


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

    constructor(private cadastroService: CadastroClienteService,
                private produtosService: ProdutosService,
                private autenticacaoService: AutenticacaoService,
                private router: Router) { }

    ngOnInit(): void {
      this.carregarUsuario();
    }

    carregarUsuario() : void{
      this.cadastroService.buscarByUser().subscribe(retorno => {
        this.listarCliente = retorno;
      })
    }


    salvarCadastroCliente(): void {
      this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
        this.cadastro = retorno;
      });
      this.router.navigate(['']);
    }

    deletarPerfilCliente(cliente: ICadastroCliente) {
      this.cadastroService.excluir(cliente.clienteId).subscribe(cliente => {
       if (cliente) {

         this.autenticacaoService.LimparToken();
         alert('Perfil Deletado com Sucesso');
       } else {
         alert('Falha ao Deletar Perfil ');
       }
        this.router.navigate(['/login-cliente']);
      });
    };

    

  /*   deletarPerfilCliente(cliente: ICadastroCliente) {
      this.produtosService.excluir(cliente.clienteId).subscribe(cliente => {
       if (cliente) {
         alert('Perfil Deletado com Sucesso');
       } else {
         alert('Falha ao Deletar Perfil');
       }
        this.salvarCadastroCliente();
      });
    }; */

  }
