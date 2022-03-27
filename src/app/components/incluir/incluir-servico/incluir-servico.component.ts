import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServico } from 'src/app/model/IServico.model';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-incluir-servico',
  templateUrl: './incluir-servico.component.html',
  styleUrls: ['./incluir-servico.component.css']
})
export class IncluirServicoComponent implements OnInit {

    servico: IServico = {
      nomeServico: '',
      precoServico: 0,
      assocServico: '',
      descServico: ''
    };




  constructor(private servicoService: ServicosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  salvarServico(): void {
    this.servicoService.cadastrar(this.servico).subscribe(retorno => {
      this.servico = retorno;
    });
    this.router.navigate(['']);
  }


}
