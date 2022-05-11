import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduto } from '../model/IProduto.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProdutosService {
    private URL: string = 'http://localhost:3000/produtos';
    private apiURL: string = 'http://localhost:3000'
  
    constructor(private http: HttpClient){
        this.apiURL;
     }
  
    buscarTodos() : Observable<IProduto[]> {
      return this.http.get<IProduto[]>(this.URL).pipe(
        map(retorno => retorno),
        //catchError(erro => this.exibirErro(erro))
      );
    }

    listarTodosProdutos(){
        this.http.get(`${this.apiURL }/produtos`)
            .subscribe(resultado => console.log(resultado));
      }
  

    buscarPorId(id: number) : Observable<IProduto> {
      return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
        map(retorno => retorno),
       // catchError(erro => this.exibirErro(erro))
      );
    }
  
  
    atualizar( produto: IProduto): Observable<IProduto> {
      return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
        map(retorno => retorno),
        //catchError(erro => this.exibirErro(erro))
      );
    }
  

    excluir( id: number): Observable<any> {
      return this.http.delete<any>(`${this.URL}/${id}`).pipe(
        map(retorno => retorno),
       // catchError(erro => this.exibirErro(erro))
      );
    }
  
  
    cadastrar( produto: IProduto): Observable<IProduto> {
      return this.http.post<IProduto>(this.URL, produto).pipe(
        map(retorno => retorno),
        //catchError(erro => this.exibirErro(erro))
      );
    }
  
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