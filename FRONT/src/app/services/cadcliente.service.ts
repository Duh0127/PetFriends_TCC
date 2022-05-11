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
  
  login(login: ICadastroCliente) {
    return this.http.post(`${this.baseUrl}/Autenticar`, login, { responseType: 'text' }).pipe(
      map(retorno => retorno)
      
    );
  }


   


  // login(login: ICadastroCliente,) {
  //   return this.http.post<ICadastroCliente>(`${this.baseUrl}/Autenticar`, login).pipe(
  //     map(retorno => retorno ),
  //   );
  // }












}
