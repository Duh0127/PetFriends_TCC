import { DescricaoProdutoComponent } from './components/descricao-produto/descricao-produto.component';
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
import { ClienteComponent } from './components/perfil/cliente/cliente.component';
import { AssociadoComponent } from './components/perfil/associado/associado.component';
import { SacComponent } from './components/sac/sac.component';
import { ProdutoComponent } from './components/Incluir/produto/produto.component';
import { ServicoComponent } from './components/Incluir/servico/servico.component';


const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'login-cliente', component:ClienteLoginComponent},
    {path:'login-associado', component:AssociadoLoginComponent},
    {path:'cadastro-cliente', component:ClienteCadastroComponent},
    {path:'cadastro-associado', component:AssociadoCadastroComponent},
    {path:'reserva', component:ReservaComponent},
    {path:'recuperacao-senha', component:SenhaComponent},
    {path:'validacao-senha', component:ValidacaoComponent},
    {path:'redefinicao-senha', component:RedefinicaoComponent},
    {path:'desc-produto', component:DescricaoProdutoComponent},
    {path:'perfil-cliente', component:ClienteComponent},
    {path:'perfil-associado', component:AssociadoComponent},
    {path:'sac', component:SacComponent},
    {path:'incluir-produto', component:ProdutoComponent},
    {path:'incluir-servico', component:ServicoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
