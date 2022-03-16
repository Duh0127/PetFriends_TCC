import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  carrinho: any = [
    {id: 1, itens: 'Sachê Friskies Frango', 
    quantidade: 1, valorUnitario: 'R$3,00'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}