import { ICadastroCliente } from './../../../model/ICadastroCliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cadastro: ICadastroCliente = {
    nomeCadCliente: '',
    enderecoCadCliente: '',
    emailCadCliente: '',
    telCadCliente: '',
    cpfCadCliente: '',
    senhaCadCliente: '',
    confsenhaCadCliente: ''
  };


  constructor(private cadastroService: CadastroClienteService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  
  salvarCadastroCliente(): void {
    this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
      this.cadastro = retorno;
    });
    this.router.navigate(['']);
  }

}
