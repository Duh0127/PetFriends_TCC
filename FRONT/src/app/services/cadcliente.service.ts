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

  baseUrl = `${environment.UrlPrincipal}/Clientes/Registrar`;
  

  constructor(private http: HttpClient){ }


  cadastrar(cliente: ICadastroCliente): Observable<ICadastroCliente> {
    return this.http.post<ICadastroCliente>(`${this.baseUrl}`, cliente).pipe(
      map(retorno => retorno),
      //catchError(erro => this.exibirErro(erro))
    );
  }












}
