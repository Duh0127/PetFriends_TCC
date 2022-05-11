
import { ICadastroAssociado } from './../../../model/ICadastroAssociado.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';

@Component({
  selector: 'app-associado-cadastro',
  templateUrl: './associado-cadastro.component.html',
  styleUrls: ['./associado-cadastro.component.css']
})
export class AssociadoCadastroComponent implements OnInit {

  cadastro: ICadastroAssociado = {
    nomeCadAssociado: '',
    enderecoCadAssociado: '',
    emailCadAssociado: '',
    tipoCadAssociado: '',
    telCadAssociado: '',
    cnpjCadAssociado: '',
    senhaCadAssociado: '',
    confsenhaCadAssociado: ''
  };


  constructor(private cadastroService: CadastroAssociadoService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  
  salvarCadastroAssoc(): void {
    this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
      this.cadastro = retorno;
    });
    this.router.navigate(['']);
  }

}
