import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { ProdutosService } from 'src/app/services/produtos.service';

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

  listarAssociado: ICadastroAssociado[] = [];
  listarProdutos: IProduto[] = [];

  constructor(
    private cadastroService: CadastroAssociadoService,
    private produtosService: ProdutosService,
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarUsuario();
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

   deletarProdutos(produto: IProduto) {
     this.produtosService.excluir(produto.produtoId).subscribe(produto => {
      if (produto) {
        alert('Produto Deletado com Sucesso');
      } else {
        alert('Falha ao Deletar Produto ');
      }
       this.carregarProdutos();
     });
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
