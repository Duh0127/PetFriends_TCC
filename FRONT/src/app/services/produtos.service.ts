import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IProduto } from '../model/IProduto.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProdutosService {

    //private URL: string = 'http://localhost:3000/produtos';

    baseUrl = `${environment.UrlPrincipal}/Produtos`;



    constructor(private http: HttpClient){ }

      buscarTodos() : Observable<IProduto[]> {
        return this.http.get<IProduto[]>(`${this.baseUrl}/GetAll`).pipe(
        map(retorno => retorno),

       );
     }

     buscarByUser() : Observable<IProduto[]> {
      return this.http.get<IProduto[]>(`${this.baseUrl}/GetByUser`).pipe(
      map(retorno => retorno),

     );
   }

    buscarByCategoria(categoriaProduto: number) : Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${this.baseUrl}/GetByCategoria/${categoriaProduto}`).pipe(
    map(retorno => retorno),

   );
 }



  buscarPorId(produtoId: number) {
    return this.http.get<IProduto>(`${this.baseUrl}/${produtoId}`).pipe(
      map(retorno => retorno),

    );
  }

     cadastrar(produto: IProduto): Observable<IProduto>{
      return this.http.post<IProduto>(`${this.baseUrl}`, produto).pipe(
        map(retorno => retorno),

      );
    }

     excluir(id: number): Observable<IProduto> {
       return this.http.delete<IProduto>(`${this.baseUrl}/${id}`).pipe(
         map(retorno => retorno),

       );
     }




      atualizar( produto: IProduto): Observable<IProduto> {
      return this.http.put<IProduto>(`${this.baseUrl}/`, produto).pipe(
          map(retorno => retorno),

        );
      }



      addProdPhoto(file: File, onUpdate: (progress: number) => void, onSaved: (path: string) => void): Observable<any> {

        const formData = new FormData();

        formData.append('file', file, file.name);


        console.log("formData" + formData)

        return this.http.post(this.baseUrl + "/PhotoUpload" , formData, { reportProgress: true, observe: 'events' }).pipe(

          map(event => {

            if (event.type === HttpEventType.UploadProgress)

              onUpdate(Math.round(100 * event.loaded / event.total!));

            else if (event.type === HttpEventType.Response && event.body != null) {

              let prodPhoto = (event.body as any)["prodPhoto"] as string

              console.log("Photo uploaded at: " + prodPhoto)

              onSaved(prodPhoto);

            } else {

              console.log(event)

            }

          }),

        );
      }

      addProduto(produto: IProduto): Observable<any> {
        var body = {
        "produtoId": produto.produtoId,
        "associadoId": produto.associadoId,
        "categoriaProduto": produto.categoriaProduto,
        "codigoProduto": produto.codigoProduto,
        "nomeProduto": produto.nomeProduto,
        "qtdProduto": produto.qtdProduto,
        "precoProduto": produto.precoProduto,
        "fabricanteProduto": produto.fabricanteProduto,
        "descricaoProduto": produto.descricaoProduto,
        "enderecoCadAssociado": produto.enderecoCadAssociado,
        "produtoImagem": produto.produtoImagem
        }
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
        return this.http.post(this.baseUrl, body, options).pipe(
          map(produto => produto),

        );
      }
  }
