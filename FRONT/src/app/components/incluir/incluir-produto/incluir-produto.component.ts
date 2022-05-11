import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';

@Component({
  selector: 'app-incluir-produto',
  templateUrl: './incluir-produto.component.html',
  styleUrls: ['./incluir-produto.component.css']
})
export class IncluirProdutoComponent implements OnInit {



  produto: IProduto = {
    nome: '',
    codigo: '',
    quantidade: 0,
    preco: 0,
    fabricante: '',
  };

  listarAssociados: ICadastroAssociado[] = [];
  listarProdutos: IProduto[] = [];

  //Objeto.atributo

  constructor(
    private produtosService: ProdutosService, 
    private activatedRouter: ActivatedRoute,
    private cadastroService: CadastroAssociadoService, 
    private router: Router) { }


  ngOnInit(): void {
  }

   salvarProduto() {
     
      this.produtosService.cadastrar(this.produto).subscribe(produto => {
        if (produto) {
          alert('Produto Cadastrado com Sucesso');
        } else {
          alert('Falha ao Cadastrar Produto ');
        }
     }, error => {
       console.log(error);
       alert('erro interno do sistema');
     });
      this.router.navigate(['perfil-associado']);
    }

}




  
