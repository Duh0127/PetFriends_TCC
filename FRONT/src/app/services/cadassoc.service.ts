import { ICadastroAssociado } from '../model/ICadastroAssociado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroAssociadoService {

  //private URL: string = 'http://localhost:3000/cadassoc';
  baseUrl = `${environment.UrlPrincipal}/Associados`;


  constructor(private http: HttpClient){ }


  cadastrar(associado: ICadastroAssociado): Observable<ICadastroAssociado> {
    return this.http.post<ICadastroAssociado>(`${this.baseUrl}/Registrar`, associado).pipe(
      map(retorno => retorno)

    );
  }

  login(login: any) {
    return this.http.post<any>(`${this.baseUrl}/Autenticar`, login).pipe(
      map(retorno => retorno)
    );
  }

  buscarByUser() : Observable<ICadastroAssociado[]> {
    return this.http.get<ICadastroAssociado[]>(`${this.baseUrl}/GetByUser`).pipe(
    map(retorno => retorno)

   );
  }

  excluir(id: number): Observable<ICadastroAssociado> {
    return this.http.delete<ICadastroAssociado>(`${this.baseUrl}/${id}`).pipe(
      map(retorno => retorno),

    );
  }

  atualizar(associado: ICadastroAssociado): Observable<ICadastroAssociado> {
    return this.http.put<ICadastroAssociado>(`${this.baseUrl}/${associado.associadoId}`, associado).pipe(
      map(retorno => retorno),

    );
  }








}
