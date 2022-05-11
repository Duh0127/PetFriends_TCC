import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
//import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';
import { IServico } from '../model/IServico.model';

@Injectable({
    providedIn: 'root'
  })
  export class ServicosService {
  
    private URL: string = 'http://localhost:3000/produtos';
  
    
  
    constructor(private http: HttpClient) { }
  
    
    buscarTodos() : Observable<IServico[]> { 
      return this.http.get<IServico[]>(this.URL).pipe(
        map(retorno => retorno),
        //catchError(erro => this.exibirErro(erro))
      );
  
    }
  
    buscarPorId(id: number) : Observable<IServico> {
      return this.http.get<IServico>(`${this.URL}/${id}`).pipe(
        map(retorno => retorno),
       // catchError(erro => this.exibirErro(erro))
      );
    }
  
  
    atualizar( produto: IServico): Observable<IServico> {
      return this.http.put<IServico>(`${this.URL}/${produto.id}`, produto).pipe(
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
  
  
    cadastrar( produto: IServico): Observable<IServico> {
      return this.http.post<IServico>(this.URL, produto).pipe(
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