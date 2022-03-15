import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {


  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() precoProduto: number = 0;
  @Input() associados: string = '';
  @Input() quantidade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
