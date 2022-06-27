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

   );
 }






}
