import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

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

  //Objeto.atributo

  constructor(private produtosService: ProdutosService, private activatedRouter: ActivatedRoute, private router: Router) { }

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




  
