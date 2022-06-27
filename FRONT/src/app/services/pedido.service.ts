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

       );
     }

    cadastrar(itemPedido: any): Observable<any>{
      return this.http.post<any>(`${this.pedidosUrl}`, itemPedido).pipe(
        map(retorno => retorno),

        );
      }

      buscarByUser() : Observable<IPedido[]> {
        return this.http.get<IPedido[]>(`${this.pedidosUrl}/GetByUser`).pipe(
        map(retorno => retorno),

       );
     }

      buscarByUserStatus(statusPedido: number): Observable<IPedido[]> {
        return this.http.get<IPedido[]>(`${this.pedidosUrl}/GetByUser/${statusPedido}`).pipe(
      map(retorno => retorno),
      ) ;
    }

     excluir(id: number): Observable<IPedido> {
        return this.http.delete<IPedido>(`${this.pedidosUrl}/${id}`).pipe(
          map(retorno => retorno),

        );
      }

    }
