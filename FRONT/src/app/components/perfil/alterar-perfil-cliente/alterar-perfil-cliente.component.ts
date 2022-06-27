  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
  import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
  import { CadastroClienteService } from 'src/app/services/cadcliente.service';
  import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';



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
      Swal.fire({
        icon: 'warning',
        title: 'Tem Certeza que Deseja Deletar Conta?',
        text: 'Esta ação não pode ser desfeita',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        confirmButtonColor: '#ffd13a'
      }).then(result => {
        if(result.value){
          this.cadastroService.excluir(cliente.clienteId).subscribe(cliente => {
            if (cliente) {
              this.autenticacaoService.LimparToken();
              Swal.fire({icon: 'success',
                title: 'Perfil Deletado com Sucesso',
                text: 'Foi bom ter você com a gente! :)',
                showConfirmButton: true,
                confirmButtonColor: '#ffd13a'});
            } else {
              Swal.fire({icon: 'error',
                title: 'Falha ao Deletar Perfil',
                text: 'Algo deu errado',
                showConfirmButton: true,
                confirmButtonColor: '#ffd13a'});
            }
             this.router.navigate(['/login-cliente']);
           });
        }
      })
    }

    atualizarPerfilCliente(cliente: ICadastroCliente) {
      this.cadastroService.atualizar(this.cadastro).subscribe(cliente => {
        this.cadastro = cliente;
        Swal.fire({icon: 'success',
          title: 'Perfil atualizado com sucesso!',
          text:'',
          showConfirmButton: true,
          confirmButtonColor: '#ffd13a'
        });
        this.router.navigate(['/alterar-perfil-cliente']);

      });
    }

  }
