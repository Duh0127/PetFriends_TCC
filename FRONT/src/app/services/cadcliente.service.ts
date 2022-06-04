import { ICadastroCliente } from './../model/ICadastroCliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

 //private URL: string = 'http://localhost:3000/cadcliente';

 baseUrl = `${environment.UrlPrincipal}/Clientes`;



 constructor(private http: HttpClient,){ }


 cadastrar(cliente: ICadastroCliente): Observable<ICadastroCliente> {
   return this.http.post<ICadastroCliente>(`${this.baseUrl}/Registrar`, cliente).pipe(
     map(retorno => retorno)
     //catchError(erro => this.exibirErro(erro))
   );
 }

 login(login: any) {
   return this.http.post<any>(`${this.baseUrl}/Autenticar`, login).pipe(
    map(retorno => retorno)
    );
  }

  buscarByUser() : Observable<ICadastroCliente[]> {
    return this.http.get<ICadastroCliente[]>(`${this.baseUrl}/GetByUser`).pipe(
    map(retorno => retorno)
    //catchError(erro => this.exibirErro(erro))
   );
  }

  excluir(id: number): Observable<ICadastroCliente> {
    return this.http.delete<ICadastroCliente>(`${this.baseUrl}/${id}`).pipe(
      map(retorno => retorno),
     // catchError(erro => this.exibirErro(erro))
    );
  }





 // login(login: ICadastroCliente,) {
 //   return this.http.post<ICadastroCliente>(`${this.baseUrl}/Autenticar`, login).pipe(
 //     map(retorno => retorno ),
 //   );
 // }










}
