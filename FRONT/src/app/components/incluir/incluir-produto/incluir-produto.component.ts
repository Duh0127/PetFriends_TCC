import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incluir-produto',
  templateUrl: './incluir-produto.component.html',
  styleUrls: ['./incluir-produto.component.css']
})
export class IncluirProdutoComponent implements OnInit {

  incluirProdutoForm!: FormGroup;

  cadastro: ICadastroAssociado = {
    associadoId: 0,
    nomeCadAssociado: '',
    enderecoCadAssociado: '',
    emailCadAssociado: '',
    telCadAssociado: '',
    cnpjCadAssociado: '',
    senhaCadAssociado: ''
  };

  // produto: IProduto = {
  //   produtoId: 0,
  //   associadoId: 0,
  //   nomeProduto: '',
  //   codigoProduto: '',
  //   qtdProduto: 0,
  //   precoProduto: 0,
  //   fabricanteProduto: '',
  //   descricaoProduto: '',
  //   produtoReservado: false

  // };

  //Objeto.atributo
  listarAssociado: ICadastroAssociado[] = [];
  listarProdutos: IProduto[] = [];

  constructor(private formBuilder: FormBuilder,
              private cadastroService: CadastroAssociadoService,
              private produtosService: ProdutosService,
              private router: Router) { }

  ngOnInit(): void {
    this.carregarUsuario();
    this.carregarProdutos();

    this.incluirProdutoForm = this.formBuilder.group(
      {
        nomeProduto: ['', [Validators.required]],
        codigoProduto: ['', [Validators.required]],
        qtdProduto: ['', [Validators.required]],
        precoProduto:['', [Validators.required]],
        fabricanteProduto: ['', [Validators.required]],
        descricaoProduto: ['', [Validators.required]],
      }
    )
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

  //  deletarProdutos(produto: IProduto) {
  //    this.produtosService.excluir(produto.produtoId).subscribe(produto => {
  //     if (produto) {
  //       alert('Produto Deletado com Sucesso');
  //     } else {
  //       alert('Falha ao Deletar Produto ');
  //     }
  //      this.carregarProdutos();
  //    });
  //  };

   salvarProduto() {

    var dadosProduto = this.incluirProdutoForm.getRawValue() as ProdutosService;

      this.produtosService.cadastrar(dadosProduto).subscribe(produto => {
        if (produto) {
          Swal.fire('Produto Cadastrado com Sucesso', 'Tudo certo', 'success');
          window.location.reload();
          this.carregarProdutos();
        } else {
          Swal.fire('Falha ao Cadastrar Produto', 'Algo deu errado', 'error');
        }
     }, error => {
       console.log(error);
       alert('erro interno do sistema');
     });
      this.router.navigate(['perfil-associado']);
    }

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

}








