import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CardServicoComponent } from './card-servico/card-servico.component';



@NgModule({
  declarations: [
    CardProdutoComponent,
    CardServicoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardProdutoComponent,
            CardServicoComponent
  ]
})
export class SharedModule { }
