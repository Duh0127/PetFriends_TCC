import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.autenticacaoService.ObterToken())
    {
      return true
    }
    else
    {
      this.router.navigate(['login-cliente']);
      return false;



      // const token = window.localStorage.getItem('token');
    // if(token) {

     }

  }
}


