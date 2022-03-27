import { ICadastroAssociado } from '../model/ICadastroAssociado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroAssociadoService {

  private URL: string = 'http://localhost:3000/cadassoc';
  

  constructor(private http: HttpClient){ }


  cadastrar( cadastro: ICadastroAssociado): Observable<ICadastroAssociado> {
    return this.http.post<ICadastroAssociado>(this.URL, cadastro).pipe(
      map(retorno => retorno),
      //catchError(erro => this.exibirErro(erro))
    );
  }










}
