import { ICadastroCliente } from './../model/ICadastroCliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  private URL: string = 'http://localhost:3000/cadcliente';
  

  constructor(private http: HttpClient){ }


  cadastrar( cadastro: ICadastroCliente): Observable<ICadastroCliente> {
    return this.http.post<ICadastroCliente>(this.URL, cadastro).pipe(
      map(retorno => retorno),
      //catchError(erro => this.exibirErro(erro))
    );
  }










}
