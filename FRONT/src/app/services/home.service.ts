import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IProduto } from '../model/IProduto.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProdutosService {
  buscarTodosDois() {
    throw new Error('Method not implemented.');
  }
    // private URL: string = 'http://localhost:3000/produtos';
    // private apiURL: string = 'http://localhost:3000'

    baseUrl = `${environment.UrlPrincipal}/Produtos`;

    constructor(private http: HttpClient){
        //this.apiURL;
     }

     buscarTodos() : Observable<IProduto[]> {
      return this.http.get<IProduto[]>(`${this.baseUrl}/GetAll`).pipe(
      map(retorno => retorno),

     );
   }



    buscarPorId(id: number) : Observable<IProduto> {
      return this.http.get<IProduto>(`${this.baseUrl}/${id}`).pipe(
        map(retorno => retorno),

      );
    }


    atualizar( produto: IProduto): Observable<IProduto> {
      return this.http.put<IProduto>(`${this.baseUrl}/${produto.produtoId}`, produto).pipe(
        map(retorno => retorno),

      );
    }


    excluir( id: number): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/${id}`).pipe(
        map(retorno => retorno),

      );
    }


    cadastrar( produto: IProduto): Observable<IProduto> {
      return this.http.post<IProduto>(this.baseUrl, produto).pipe(
        map(retorno => retorno),

      );
    }


  }
