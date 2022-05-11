import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteLoginComponent } from './components/login/cliente-login/cliente-login.component';
import { AssociadoLoginComponent } from './components/login/associado-login/associado-login.component';
import { AssociadoCadastroComponent } from './components/cadastro/associado-cadastro/associado-cadastro.component';
import { ClienteCadastroComponent } from './components/cadastro/cliente-cadastro/cliente-cadastro.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { SenhaComponent } from './components/senha/senha.component';
import { RedefinicaoComponent } from './components/senha/redefinicao/redefinicao.component';
import { ValidacaoComponent } from './components/senha/validacao/validacao.component';
import { ClienteComponent } from './components/perfil/cliente/cliente.component';
import { AssociadoComponent } from './components/perfil/associado/associado.component';
import { DescricaoProdutoComponent } from './components/descricao-produto/descricao-produto.component';
import { ProdutoComponent } from './components/Incluir/produto/produto.component';
import { ServicoComponent } from './components/Incluir/servico/servico.component';
import { SacComponent } from './components/sac/sac.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteLoginComponent,
    AssociadoLoginComponent,
    AssociadoCadastroComponent,
    ClienteCadastroComponent,
    ReservaComponent,
    HeaderComponent,
    FooterComponent,
    SenhaComponent,
    RedefinicaoComponent,
    ValidacaoComponent,
    ClienteComponent,
    AssociadoComponent,
    DescricaoProdutoComponent,
    ProdutoComponent,
    ServicoComponent,
    SacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
