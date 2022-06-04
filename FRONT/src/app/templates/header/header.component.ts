import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


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
      name: "Ração",
      RouterLink: "/racao-seca"
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
  

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService,
              private cartService : CarrinhoService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe (res => {
      this.totalProduto = res.length

    })
  }

  sair(){
    this.autenticacaoService.LimparToken();
    this.router.navigate(["/login-cliente"])
  }

  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}
