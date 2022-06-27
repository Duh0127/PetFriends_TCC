import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IComissaoRegistro } from '../model/IComissaoRegistro.model';

@Injectable({
  providedIn: 'root'
})
export class ComissaoRegistroService {

 //private URL: string = 'http://localhost:3000/cadcliente';

 baseUrl = `${environment.UrlPrincipal}/ComissoesRegistros`;



 constructor(private http: HttpClient,){ }


  buscarByUser() : Observable<IComissaoRegistro[]> {
    return this.http.get<IComissaoRegistro[]>(`${this.baseUrl}/GetByUser`).pipe(
    map(retorno => retorno)
   );
  }
}
