import { ReservaComponent } from './components/reserva/reserva.component';
import { ClienteCadastroComponent } from './components/cadastro/cliente-cadastro/cliente-cadastro.component';
import { AssociadoLoginComponent } from './components/login/associado-login/associado-login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteLoginComponent } from './components/login/cliente-login/cliente-login.component';
import { AssociadoCadastroComponent } from './components/cadastro/associado-cadastro/associado-cadastro.component';
import { SenhaComponent } from './components/senha/senha.component';
import { ValidacaoComponent } from './components/senha/validacao/validacao.component';
import { RedefinicaoComponent } from './components/senha/redefinicao/redefinicao.component';


const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'login-cliente', component:ClienteLoginComponent},
    {path:'login-associado', component:AssociadoLoginComponent},
    {path:'cadastro-cliente', component:ClienteCadastroComponent},
    {path:'cadastro-associado', component:AssociadoCadastroComponent},
    {path:'reserva', component:ReservaComponent},
    {path:'recuperacao-senha', component:SenhaComponent},
    {path:'validacao-senha', component:ValidacaoComponent},
    {path:'redefinicao-senha', component:RedefinicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
