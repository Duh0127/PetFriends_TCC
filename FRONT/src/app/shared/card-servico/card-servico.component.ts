import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.css']
})
export class CardServicoComponent implements OnInit {

  @Input() foto: string = '';
  @Input() nomeServico: string = '';
  @Input() precoServico: number = 0;
  @Input() associados: string = '';
  @Input() quantidade: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
