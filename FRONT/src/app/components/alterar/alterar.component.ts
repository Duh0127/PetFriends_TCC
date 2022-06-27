import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {



  produto: IProduto = {
    produtoId: 0,
    associadoId: 0,
    nomeProduto: '',
    categoriaProduto: 0,
    codigoProduto: '',
    qtdProduto: 0,
    precoProduto: 0,
    fabricanteProduto: '',
    descricaoProduto: '',
    produtoImagem: '',
    enderecoCadAssociado: ''
  };

  listarAssociados: ICadastroAssociado[] = [];
  listarProdutos: IProduto[] = [];

  //Objeto.atributo

  constructor(private produtosService: ProdutosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

  salvarProduto(): void {
    this.produtosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;

    });
    this.router.navigate(['/produtos']);
   /* console.log('Nome: ',this.produto.nome);
    console.log('Validade: ',this.produto.validade);
    console.log('Preço: ',this.produto.precoProduto);
    alert('Salvo com sucesso!');*/
  }

}
