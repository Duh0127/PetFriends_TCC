import { IProdutoCarrinho } from './../model/IProdutoCarrinho.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduto } from '../model/IProduto.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class CarrinhoService {
  
    baseUrl = `${environment.UrlPrincipal}/Produtos`;

    public cartItemList : any = []
    public listarProduto = new BehaviorSubject<any>([]);
  
    
  
    constructor(private http: HttpClient){ }


    getProducts(){
      return this.listarProduto.asObservable();
    }

    setProduct(produto : any){
      this.cartItemList.push(...produto);
      this.listarProduto.next(produto);
    }

    addtoCar(produto : any){
      this.cartItemList.push(produto);
      this.listarProduto.next(this.cartItemList);
      this.getTotalPrice();
      console.log(this.cartItemList);
    }

    getTotalPrice(): number {
      let grandTotal = 0;
      this.cartItemList.map((a:any) => {
        grandTotal += a.total;
      })
      return grandTotal;
    }

    removeCartItem(produto: any) {
      this.cartItemList.map((a:any, index: any) => {
        if(produto.produtoId === a.produtoId){
          this.cartItemList.splice(index,1);
        }
      })
      this.listarProduto.next(this.cartItemList);
    }

    removeAllCart(){
      this.cartItemList = []
      this.listarProduto.next(this.cartItemList);
    }
  
    // buscarTodosCarrinho() : Observable<IProdutoCarrinho[]> {
    //     return this.http.get<IProdutoCarrinho[]>(this.URLcarrinho).pipe(
    //       map(retorno => retorno),
    //       //catchError(erro => this.exibirErro(erro))
    //     );
    // }


    // buscarTodos() : Observable<IProduto[]> {
    //   return this.http.get<IProduto[]>(this.URL).pipe(
    //     map(retorno => retorno),
    //     //catchError(erro => this.exibirErro(erro))
    //   );
    // }


  
    // buscarPorId(id: number) : Observable<IProduto> {
    //   return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
    //     map(retorno => retorno),
    //    // catchError(erro => this.exibirErro(erro))
    //   );
    // }
  

    // excluir( id: number): Observable<any> {
    //   return this.http.delete<any>(`${this.URL}/${id}`).pipe(
    //     map(retorno => retorno),
    //    // catchError(erro => this.exibirErro(erro))
    //   );
    // }
  
  
    // cadastrar( produto: IProduto): Observable<IProduto> {
    //   return this.http.post<IProduto>(this.URL, produto).pipe(
    //     map(retorno => retorno),
    //     //catchError(erro => this.exibirErro(erro))
    //   );
    // }

   // <---------------------------------------------------------->

  
    //Observable: ele vai ficar observando toda hora para ver se aconteceu alguma mudança
    /*exibirErro(e: any) : Observable<any> {
  
      this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação', 'toast-error');
      return EMPTY; //retornar nada (essa função serve para ultilizar o Observable, pois quando não é void ele precisa que retorne algo)
    }*/
  
    /*exibirMensagem(titulo: string, mensagem: string, tipo: string) : void {
  
      this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
      //No toastr será exibido mensagem, titulo, botão para fechar, barra com tempo de vizualização e o tipo
    }*/
  
  }