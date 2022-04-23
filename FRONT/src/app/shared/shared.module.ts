import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { RouterModule } from '@angular/router';





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
