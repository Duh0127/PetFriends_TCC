import { IServico } from './../../../model/IServico.model';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  listarServicos: IServico[] = [];

  constructor(private servicosService: ServicosService) { }

  ngOnInit(): void {
    this.carregarServicos();
  }

  carregarServicos() : void{
    this.servicosService.buscarTodos().subscribe(retorno => {
      this.listarServicos = retorno;
    })
  };

  deletar(servico: IServico) : void {
    this.servicosService.excluir(servico.id!).subscribe(() => {
      this.carregarServicos();
    });
  };







}
