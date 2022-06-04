import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-higiene-gatos',
  templateUrl: './higiene-gatos.component.html',
  styleUrls: ['./higiene-gatos.component.css']
})
export class HigieneGatosComponent implements OnInit {

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

  public totalProduto : number = 0;


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

}
