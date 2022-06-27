import { IItemPedido } from './../model/IItemPedido.model';
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
    pedidosUrl = `${environment.UrlPrincipal}/Pedidos`;
    itensPedidoUrl = `${environment.UrlPrincipal}/ItensPedido`;

    public cartItemList : any = []
    public listarProduto = new BehaviorSubject<any>([]);
    public search = new BehaviorSubject<string>("");



    constructor(private http: HttpClient){ }

    buscarByUser(statusItemPedido: number): Observable<IProduto[]> {
      return this.http.get<IProduto[]>(`${this.itensPedidoUrl}/GetByUser/${statusItemPedido}`).pipe(
        map(retorno => retorno),
      );
    }

    cadastrarItemPedido(produto: any): Observable<any>{
      return this.http.post<any>(`${this.itensPedidoUrl}`, produto).pipe(
        map(retorno => retorno),
      );
    }

    excluirItemPedido(id: number): Observable<IItemPedido> {
      return this.http.delete<IItemPedido>(`${this.itensPedidoUrl}/${id}`).pipe(
        map(retorno => retorno),
      );
    }



  }

