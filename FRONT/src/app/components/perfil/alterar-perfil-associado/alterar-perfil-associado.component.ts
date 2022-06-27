    import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
    import { Router } from '@angular/router';
    import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
    import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
    import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
    import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';


    @Component({
      selector: 'app-alterar-perfil-associado',
      templateUrl: './alterar-perfil-associado.component.html',
      styleUrls: ['./alterar-perfil-associado.component.css']
    })
    export class AlterarPerfilAssociadoComponent implements OnInit {

      // cadastroForm!: FormGroup;

       cadastro: ICadastroAssociado = {
         associadoId: 0,
         nomeCadAssociado: '',
         enderecoCadAssociado: '',
         emailCadAssociado: '',
         telCadAssociado: '',
         cnpjCadAssociado: '',
         senhaCadAssociado: ''
       };

      listarAssociado: ICadastroAssociado[] = [];

      constructor(
        private cadastroService: CadastroAssociadoService,
        private produtosService: ProdutosService,
        private router: Router,
        private autenticacaoService: AutenticacaoService,
        private formBuilder: UntypedFormBuilder) { }

      ngOnInit(): void {

        this.carregarUsuario();

        // this.cadastroForm = this.formBuilder.group(
        //   {

        //     nomeCadAssociado: ['', [Validators.required]],
        //     emailCadAssociado: ['', [Validators.required, Validators.email]],
        //     enderecoCadAssociado: ['', [Validators.required]],
        //     telCadAssociado: ['', [Validators.required]],
        //     cnpjCadAssociado: ['', [Validators.required]],

        //   }
        // )

      };

      carregarUsuario() : void{
        this.cadastroService.buscarByUser().subscribe(retorno => {
          this.listarAssociado = retorno;
        })
      }

      // salvarCadastroAssoc(): void {
      //   this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
      //     this.cadastro = retorno;
      //   });
      //   this.router.navigate(['']);
      // };

      deletarPerfilAssociado(associado: ICadastroAssociado) {
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
            this.cadastroService.excluir(associado.associadoId).subscribe(associado => {
              if (associado) {
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
               this.router.navigate(['/login-associado']);
             });
          }
        })
      };

      atualizarPerfilAssociado(associado: ICadastroAssociado) {
        this.cadastroService.atualizar(this.cadastro).subscribe(associado => {
          this.cadastro = associado;
          Swal.fire({icon: 'success',
            title: 'Perfil atualizado com sucesso!',
            text:'',
            showConfirmButton: true,
            confirmButtonColor: '#ffd13a'
          });
          this.router.navigate(['/alterar-perfil-associado']);

        });
      }

    }
