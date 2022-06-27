import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.css']
})
export class DescricaoProdutoComponent implements OnInit {

  listarProdutos: IProduto[] = [];
  searchKey:string = "";

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


  produtoId: any;
  produto: any;

  public searchTerm : string = '';

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService,
              private produtosService: ProdutosService,
              private carrinhoService: CarrinhoService,
              private cartService : CarrinhoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.produtoId = this.route.snapshot.params['produtoId'];
    this.buscarProduto();

    this.produtosService.buscarTodos().subscribe( res => {
      this.listarProdutos = res;

    this.listarProdutos.forEach((a:any) => {
      Object.assign(a, {qtdProduto: 1, total: a.precoProduto});
      });
    });


  }

  recarregarpagina(idProduto: any){
    this.router.navigate(['/desc-produto/'+ idProduto])
      .then(() => {
        window.location.reload();
      });
  }

  salvarItemPedido(produto: any) {
    this.carrinhoService.cadastrarItemPedido(produto).subscribe(cadastro => {
        if (cadastro) {
            Swal.fire({icon: 'success',
              title: 'Produto adicionado ao Carrinho!',
              timer: 3800,
              showCancelButton: false
            })
            .then(result => {
            if(result.value){
              this.router.navigate(['/reserva/'])
              .then(() => {
                window.location.reload();
              });
            }
          })
        }
      },
      error => {
        console.log(error);
        //alert('mais um erro de cria');
        Swal.fire({icon: 'error',
          title: 'Erro no sistema',
          showConfirmButton: false,
          timer: 1800
        });
      }
    );
  }




  buscarProduto()
  {
    this.produtosService.buscarPorId(this.produtoId).subscribe(produto =>
      {
        this.produto = produto;
        console.log(this.produto)
      });
  }

  // addtoCart(produto : any){
  //   this.carrinhoService.addtoCar(produto);
  // }

  /*ngOnInit(): void {
    this.cartService.getProducts().subscribe (res => {
      this.totalProduto = res.length
    })
  }*/

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
