import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilGuard implements CanActivate {

  constructor(private router: Router,) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (sessionStorage.getItem('Associado'))
    {
      return true
    }
    else
    {
      this.router.navigate(['perfil-cliente']);
      return false;



      // const token = window.localStorage.getItem('token');
    // if(token) {

     }

  }
}


