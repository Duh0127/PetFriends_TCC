import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {

  private Autenticado: boolean = false;

  public DefineToken( token : string)
  {
    sessionStorage.setItem('token',token);
  }

  public ObterToken()
  {
    return sessionStorage.getItem('token');
  }

  public LimparToken()
  {
    sessionStorage.clear();
  }

}
