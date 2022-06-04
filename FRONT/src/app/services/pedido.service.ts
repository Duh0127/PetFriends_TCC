import { IProdutoCarrinho } from './../model/IProdutoCarrinho.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduto } from '../model/IProduto.model';
import { environment } from 'src/environments/environment';
import { IPedido } from '../model/IPedido.model';

@Injectable({
    providedIn: 'root'
  })
  export class PedidoService {

    pedidosUrl = `${environment.UrlPrincipal}/Pedidos`;

    constructor(private http: HttpClient){ }

    buscarTodos() : Observable<IPedido[]> {
        return this.http.get<IPedido[]>(`${this.pedidosUrl}/GetAll`).pipe(
        map(retorno => retorno),
        //catchError(erro => this.exibirErro(erro))
       );
     }

    cadastrar(itemPedido: any): Observable<any>{
      return this.http.post<any>(`${this.pedidosUrl}`, itemPedido).pipe(
        map(retorno => retorno),
          //catchError(erro => this.exibirErro(erro))
        );
      }

      buscarByUser() : Observable<IPedido[]> {
        return this.http.get<IPedido[]>(`${this.pedidosUrl}/GetByUser`).pipe(
        map(retorno => retorno),
        //catchError(erro => this.exibirErro(erro))
       );
     }

     excluir(id: number): Observable<IPedido> {
        return this.http.delete<IPedido>(`${this.pedidosUrl}/${id}`).pipe(
          map(retorno => retorno),
         // catchError(erro => this.exibirErro(erro))
        );
      }

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

