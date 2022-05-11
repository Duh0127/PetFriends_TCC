import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './card-produto/card-produto.component';




@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardProdutoComponent
  ]
})
export class SharedModule { }
