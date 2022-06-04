import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

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
import { ClienteComponent } from './components/perfil/cliente/cliente.component';
import { AssociadoComponent } from './components/perfil/associado/associado.component';
import { DescricaoProdutoComponent } from './components/descricao-produto/descricao-produto.component';
import { SacComponent } from './components/sac/sac.component';
import { IncluirProdutoComponent } from './components/incluir/incluir-produto/incluir-produto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HigieneComponent } from './components/dropview/cachorros/higiene/higiene.component';
import { FarmaciaComponent } from './components/dropview/cachorros/farmacia/farmacia.component';
import { AreiaComponent } from './components/dropview/gatos/areia/areia.component';
import { EscovasPentesComponent } from './components/dropview/gatos/escovas-pentes/escovas-pentes.component';
import { TransporteComponent } from './components/dropview/gatos/transporte/transporte.component';
import { RacaoSecaComponent } from './components/dropview/racao/racao-seca/racao-seca.component';
import { RacaoUmidaComponent } from './components/dropview/racao/racao-umida/racao-umida.component';
import { RacaoDietComponent } from './components/dropview/racao/racao-diet/racao-diet.component';
import { ColeirasGuiasPeitoraisComponent } from './components/dropview/acessorios/coleiras-guias-peitorais/coleiras-guias-peitorais.component';
import { CamasCasinhasComponent } from './components/dropview/acessorios/camas-casinhas/camas-casinhas.component';
import { RoupasComponent } from './components/dropview/acessorios/roupas/roupas.component';
import { BolinhasComponent } from './components/dropview/brinquedos/bolinhas/bolinhas.component';
import { VarinhasComponent } from './components/dropview/brinquedos/varinhas/varinhas.component';
import { FrisbeesComponent } from './components/dropview/brinquedos/frisbees/frisbees.component';
import { ComedourosBebedourosGatosComponent } from './components/dropview/gatos/comedouros-bebedouros-gatos/comedouros-bebedouros-gatos.component';
import { ComedourosBebedourosCachorrosComponent } from './components/dropview/cachorros/comedouros-bebedouros-cachorros/comedouros-bebedouros-cachorros.component';
import { OssinhosComponent } from './components/dropview/cachorros/ossinhos/ossinhos.component';
import { PetiscosComponent } from './components/dropview/cachorros/petiscos/petiscos.component';
import { HigieneGatosComponent } from './components/dropview/gatos/higiene-gatos/higiene-gatos.component';
import { AlterarComponent } from './components/alterar/alterar.component';
import { Interceptor } from './interceptor/interceptor';
import { AuthGuard } from './guard/auth.guard';
import { AlterarPerfilAssociadoComponent } from './components/perfil/alterar-perfil-associado/alterar-perfil-associado.component';
import { AlterarPerfilClienteComponent } from './components/perfil/alterar-perfil-cliente/alterar-perfil-cliente.component';
import { PerfilGuard } from './guard/perfil.guard';
import { NgxMaskModule } from 'ngx-mask';
import { FilterPipe } from './shared/filter.pipe';


const serviceAutenticacao = [Interceptor]


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
    ClienteComponent,
    AssociadoComponent,
    DescricaoProdutoComponent,
    SacComponent,
    IncluirProdutoComponent,
    HigieneComponent,
    FarmaciaComponent,
    AreiaComponent,
    EscovasPentesComponent,
    TransporteComponent,
    RacaoSecaComponent,
    RacaoUmidaComponent,
    RacaoDietComponent,
    ColeirasGuiasPeitoraisComponent,
    CamasCasinhasComponent,
    RoupasComponent,
    BolinhasComponent,
    VarinhasComponent,
    FrisbeesComponent,
    ComedourosBebedourosGatosComponent,
    ComedourosBebedourosCachorrosComponent,
    OssinhosComponent,
    PetiscosComponent,
    HigieneGatosComponent,
    AlterarComponent,
    AlterarPerfilAssociadoComponent,
    AlterarPerfilClienteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [

    AuthGuard,
    PerfilGuard,
    serviceAutenticacao,
    { provide : HTTP_INTERCEPTORS, useClass:Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
