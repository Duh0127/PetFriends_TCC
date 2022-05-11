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
import { SacComponent } from './components/sac/sac.component';
import { ProdutosComponent } from './components/listar/produtos/produtos.component';
import { ServicosComponent } from './components/listar/servicos/servicos.component';
import { IncluirProdutoComponent } from './components/incluir/incluir-produto/incluir-produto.component';
import { IncluirServicoComponent } from './components/incluir/incluir-servico/incluir-servico.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';





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
    SacComponent,
    ProdutosComponent,
    ServicosComponent,
    IncluirProdutoComponent,
    IncluirServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
