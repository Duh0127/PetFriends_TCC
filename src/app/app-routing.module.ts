import { ClienteCadastroComponent } from './components/cadastro/cliente-cadastro/cliente-cadastro.component';
import { AssociadoLoginComponent } from './components/login/associado-login/associado-login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteLoginComponent } from './components/login/cliente-login/cliente-login.component';
import { AssociadoCadastroComponent } from './components/cadastro/associado-cadastro/associado-cadastro.component';


const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'login-cliente', component:ClienteLoginComponent},
    {path:'login-associado', component:AssociadoLoginComponent},
    {path:'cadastro-cliente', component:ClienteCadastroComponent},
    {path:'cadastro-associado', component:AssociadoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
