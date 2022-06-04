import { ICadastroCliente } from './../model/ICadastroCliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ISac } from '../model/ISac.model';

@Injectable({
  providedIn: 'root'
})
export class SacService {

 //private URL: string = 'http://localhost:3000/cadcliente';

 baseUrl = `${environment.UrlPrincipal}/Sac`;



 constructor(private http: HttpClient,){ }


 cadastrar(sac: ISac): Observable<ISac> {
   return this.http.post<ISac>(`${this.baseUrl}`, sac).pipe(
     map(retorno => retorno)
     //catchError(erro => this.exibirErro(erro))
   );
 }

//  login(login: any) {
//    return this.http.post<any>(`${this.baseUrl}/Autenticar`, login).pipe(
//     map(retorno => retorno)
//     );
//   }

//   buscarByUser() : Observable<ICadastroCliente[]> {
//     return this.http.get<ICadastroCliente[]>(`${this.baseUrl}/GetByUser`).pipe(
//     map(retorno => retorno)
//     //catchError(erro => this.exibirErro(erro))
//    );
//   }

//   excluir(id: number): Observable<ICadastroCliente> {
//     return this.http.delete<ICadastroCliente>(`${this.baseUrl}/${id}`).pipe(
//       map(retorno => retorno),
//      // catchError(erro => this.exibirErro(erro))
//     );
//   }





 // login(login: ICadastroCliente,) {
 //   return this.http.post<ICadastroCliente>(`${this.baseUrl}/Autenticar`, login).pipe(
 //     map(retorno => retorno ),
 //   );
 // }










}
