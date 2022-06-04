import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-frisbees',
  templateUrl: './frisbees.component.html',
  styleUrls: ['./frisbees.component.css']
})
export class FrisbeesComponent implements OnInit {

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

      if(condicao != 0)
      {
        window.location.href = "/camas-casinhas";
      }
  };

  public totalProduto : number = 0;
  public searchTerm : string = '';

  listarProdutos: IProduto[] = [];
  searchKey:string = "";


  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService,
              private produtosService: ProdutosService,
              private cartService : CarrinhoService) { }

  ngOnInit(): void {
    this.carregarProdutos();

    this.cartService.getProducts().subscribe (res => {
      this.totalProduto = res.length
    })
  }

  carregarProdutos() : void{
    this.produtosService.buscarByGategoria(12).subscribe(retorno => {
    this.listarProdutos = retorno;
  })
};

search(event: any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);
}

  sair(){
    this.autenticacaoService.LimparToken();
    this.router.navigate(["/login-cliente"])
  }


}
