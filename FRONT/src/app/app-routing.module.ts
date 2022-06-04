import { DescricaoProdutoComponent } from './components/descricao-produto/descricao-produto.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ClienteCadastroComponent } from './components/cadastro/cliente-cadastro/cliente-cadastro.component';
import { AssociadoLoginComponent } from './components/login/associado-login/associado-login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteLoginComponent } from './components/login/cliente-login/cliente-login.component';
import { AssociadoCadastroComponent } from './components/cadastro/associado-cadastro/associado-cadastro.component';
import { SenhaComponent } from './components/senha/senha.component';
import { ValidacaoComponent } from './components/senha/validacao/validacao.component';
import { RedefinicaoComponent } from './components/senha/redefinicao/redefinicao.component';
import { ClienteComponent } from './components/perfil/cliente/cliente.component';
import { AssociadoComponent } from './components/perfil/associado/associado.component';
import { SacComponent } from './components/sac/sac.component';
import { ProdutosComponent } from './components/listar/produtos/produtos.component';
import { IncluirProdutoComponent } from './components/incluir/incluir-produto/incluir-produto.component';
import { HigieneComponent } from './components/dropview/cachorros/higiene/higiene.component';
import { HigieneGatosComponent } from './components/dropview/gatos/higiene-gatos/higiene-gatos.component';
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
import { PremiumComponent } from './components/premium/premium.component';
import { AlterarComponent } from './components/alterar/alterar.component';
import { AuthGuard } from './guard/auth.guard';
import { AlterarPerfilClienteComponent } from './components/perfil/alterar-perfil-cliente/alterar-perfil-cliente.component';
import { AlterarPerfilAssociadoComponent } from './components/perfil/alterar-perfil-associado/alterar-perfil-associado.component';
import { PerfilGuard } from './guard/perfil.guard';



const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'login-cliente', component:ClienteLoginComponent},
    {path:'login-associado', component:AssociadoLoginComponent},
    {path:'cadastro-cliente', component:ClienteCadastroComponent},
    {path:'cadastro-associado', component:AssociadoCadastroComponent},

    {path:'reserva', component:ReservaComponent,
    canActivate: [AuthGuard]},

    {path:'recuperacao-senha', component:SenhaComponent},
    {path:'validacao-senha', component:ValidacaoComponent},
    {path:'redefinicao-senha', component:RedefinicaoComponent},
    {path:'desc-produto/:produtoId', component:DescricaoProdutoComponent},

    {path:'perfil-cliente', component:ClienteComponent,
    canActivate: [AuthGuard]},

    {path:'perfil-associado', component:AssociadoComponent,
    canActivate: [PerfilGuard]},

    {path:'sac', component:SacComponent},
    {path:'listar-produto', component:ProdutosComponent},

    {path:'incluir-produto', component:IncluirProdutoComponent,
    canActivate: [AuthGuard]},

    {path:'coleiras-guias-peitorais', component:ColeirasGuiasPeitoraisComponent},
    {path:'camas-casinhas', component:CamasCasinhasComponent},
    {path:'roupas', component:RoupasComponent},
    {path:'frisbees', component:FrisbeesComponent},
    {path:'varinhas', component:VarinhasComponent},
    {path:'racao-seca', component:RacaoSecaComponent},
    {path:'racao-umida', component:RacaoUmidaComponent},
    {path:'bolinhas', component:BolinhasComponent},
    {path:'racao-diet', component:RacaoDietComponent},
    {path:'transporte', component:TransporteComponent},
    {path:'escovas-pentes', component:EscovasPentesComponent},
    {path:'areia', component:AreiaComponent},
    {path:'farmacia', component:FarmaciaComponent},
    {path:'higiene', component:HigieneComponent},
    {path:'higiene-gatos', component:HigieneGatosComponent},
    {path:'comedouros-bebeoduros-cachorros', component:ComedourosBebedourosCachorrosComponent},
    {path:'comedouros-bebedouros-gatos', component:ComedourosBebedourosGatosComponent},
    {path:'ossinhos', component:OssinhosComponent},
    {path:'petiscos', component:PetiscosComponent},

    {path:'plano-premium', component:PremiumComponent,
    canActivate: [AuthGuard]},

    {path:'alterar-produto', component:AlterarComponent,
    canActivate: [AuthGuard]},

    {path:'alterar-perfil-associado', component:AlterarPerfilAssociadoComponent,
    canActivate: [AuthGuard]},

    {path:'alterar-perfil-cliente', component:AlterarPerfilClienteComponent,
    canActivate: [AuthGuard]}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
