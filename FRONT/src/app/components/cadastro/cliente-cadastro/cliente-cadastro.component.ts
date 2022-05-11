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
    cpfCadCliente: 0,
    senhaCadCliente: ''
  };


  constructor(private cadastroService: CadastroClienteService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  
  salvarCadastroCliente() {
    this.cadastroService.cadastrar(this.cadastro).subscribe(cadastro => {
      if (cadastro) {
        alert('Cliente Cadastrado com Sucesso');
      } else {
        alert('Parabéns SQL');
      }
   }, error => {
     console.log(error);
     alert('erro interno do sistema');
   });
    // this.router.navigate(['']);
  }

  

}
