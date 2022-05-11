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
    nomeProduto: '',
    qtdProduto: 0,
    precoProduto: 0,
    assocProduto: '',
    descProduto: ''
  };

  //Objeto.atributo

  constructor(private produtosService: ProdutosService, 
              private activatedRouter: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
    });
    this.router.navigate(['/produtos']);
  }
}







  
