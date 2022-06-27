import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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

  incluirProdutoForm!: UntypedFormGroup;

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


  constructor(private formBuilder: UntypedFormBuilder,
              private cadastroService: CadastroAssociadoService,
              private produtosService: ProdutosService,
              private router: Router) { }

  ngOnInit(): void {

    this.incluirProdutoForm = this.formBuilder.group(
      {
        nomeProduto: ['', [Validators.required]],
        categoriaProduto: ['', [Validators.required]],
        codigoProduto: ['', [Validators.required]],
        qtdProduto: ['', [Validators.required]],
        precoProduto:['', [Validators.required]],
        fabricanteProduto: ['', [Validators.required]],
        descricaoProduto: ['', [Validators.required]],
      }
    )

    this.carregarUsuario();
    this.carregarProdutos();


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

   salvarProduto() {

    var dadosProduto = this.incluirProdutoForm.getRawValue() as IProduto;

      this.produtosService.cadastrar(dadosProduto).subscribe(produto => {
        if (produto) {
          Swal.fire({icon: 'success',
            title: 'Produto Cadastrado com Sucesso',
            text: 'Tudo certo!',
            showConfirmButton: true,
            confirmButtonColor: '#ffd13a'});

          window.location.reload();
          this.carregarProdutos();
        } else {
          Swal.fire({icon: 'error',
            title: 'Falha ao Cadastrar Produto',
            text: 'Algo deu errado',
            showConfirmButton: true,
            confirmButtonColor: '#ffd13a'});
        }

     }, error => {
       console.log(error);
     });
      this.router.navigate(['perfil-associado']);
    }

    deletarProdutos(produto: IProduto) {
      Swal.fire({
        icon: 'warning',
        title: 'Confirma a exclusão do(a) ' + produto.nomeProduto + '?',
        text: 'Esta ação não poderá ser desfeita',
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
                title: 'Produto Deletado com Sucesso',
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

    addProduto(
      idProd: number,
      idAssoc: number,
      catProd: number,
      codProd: string,
      nomeProd: string,
      qtdProd: number,
      precoProd: number,
      fabProd: string,
      descProd: string,
      fotoProd: FileList | null,
      endAssoc: string
    ) : void {
      var produto: IProduto = {
        "produtoId": idProd,
        "associadoId": idAssoc,
        "categoriaProduto": catProd,
        "codigoProduto": codProd,
        "nomeProduto": nomeProd,
        "qtdProduto": qtdProd,
        "precoProduto": precoProd,
        "fabricanteProduto": fabProd,
        "descricaoProduto": descProd,
        "enderecoCadAssociado": endAssoc
      }
      var addProduto = (prodToAdd: IProduto) => {
        console.log(prodToAdd)
        this.produtosService.addProduto(prodToAdd).subscribe(result => {
          Swal.fire({icon: 'success',
          title: 'Produto Cadastrado com Sucesso',
          text: 'Tudo certo!',
          showConfirmButton: true,
          confirmButtonColor: '#ffd13a'});

          window.location.reload();
          this.carregarProdutos();
        })
      }
      if (fotoProd != null) {
        this.produtosService.addProdPhoto(fotoProd[0], progress => {
          console.log("Progress: " + progress)
        }, file => {
          produto.produtoImagem = file
          addProduto(produto)
        }).subscribe()
      } else {
        addProduto(produto)
      }
    }
  }










