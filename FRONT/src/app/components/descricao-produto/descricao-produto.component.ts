import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.css']
})
export class DescricaoProdutoComponent implements OnInit {

  public keyword = "name";

  data = [
    {
      id: 1,
      name: "Cachorros"
    },
    {
      id: 2,
      name: "Gatos"
    },
    {
      id: 3,
      name: "Brinquedos"
    },
    {
      id: 4,
      name: "Ração"
    },
    {
      id: 5,
      name: "Acessórios",
      RouterLink: "/acessorios"
    }

  ];
  

  itemSelecionadoPesquisa(){

    var condicao = this.data.length;

      if(condicao != 0 )
      {
        window.location.href = "/camas-casinhas";
      }
  };


  produtoId: any;
  produto: any;


  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService,
              private produtosService: ProdutosService,
              private carrinhoService: CarrinhoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.params['produtoId'];
    this.buscarProduto();
  }

  buscarProduto()
  {
    this.produtosService.buscarPorId(this.produtoId).subscribe(produto =>
      {
        this.produto = produto;
        console.log(this.produto)

        this.produto.forEach((a:any) => {
          Object.assign(a, {qtdProduto: 1, total: a.precoProduto});
          });
      })
  }

  addtoCart(produto : any){
    this.carrinhoService.addtoCar(produto);
  }

  

  sair(){
    this.autenticacaoService.LimparToken();
    this.router.navigate(["/login-cliente"])
  }

}
