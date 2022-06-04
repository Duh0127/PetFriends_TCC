    import { Component, OnInit } from '@angular/core';
    import { Router } from '@angular/router';
    import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
    import { IProduto } from 'src/app/model/IProduto.model';
    import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
    import { ProdutosService } from 'src/app/services/produtos.service';


    @Component({
      selector: 'app-alterar-perfil-associado',
      templateUrl: './alterar-perfil-associado.component.html',
      styleUrls: ['./alterar-perfil-associado.component.css']
    })
    export class AlterarPerfilAssociadoComponent implements OnInit {

      cadastro: ICadastroAssociado = {
        associadoId: 0,
        nomeCadAssociado: '',
        enderecoCadAssociado: '',
        emailCadAssociado: '',
        telCadAssociado: '',
        cnpjCadAssociado: '',
        senhaCadAssociado: ''
      };

      listarAssociados: ICadastroAssociado[] = [];

      constructor(
        private cadastroService: CadastroAssociadoService,
        private produtosService: ProdutosService,
        private router: Router) { }

      ngOnInit(): void {
        this.carregarUsuario();
      };

      carregarUsuario() : void{
        this.cadastroService.buscarByUser().subscribe(retorno => {
          this.listarAssociados = retorno;
        })
      }

      salvarCadastroAssoc(): void {
        this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
          this.cadastro = retorno;
        });
        this.router.navigate(['']);
      };


    /*  deletarPerfilAssoc(associado: ICadastroAssociado) {
        this.produtosService.excluir(associado.associadoId).subscribe(associado => {
         if (associado) {
           alert('Perfil Deletado com Sucesso');
         } else {
           alert('Falha ao Deletar Perfil ');
         }
          this.salvarCadastroAssoc();
        });
      }; */

    }
