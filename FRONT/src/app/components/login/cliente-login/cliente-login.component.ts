import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent implements OnInit {

  login: ICadastroCliente = {
    clienteId: 0,
    nomeCadCliente: '',
    enderecoCadCliente: '',
    "emailCadCliente": '',
    telCadCliente: '',
    cpfCadCliente: 0,
    "senhaCadCliente": '',
  };

  constructor(private cadastroService: CadastroClienteService,
              private router: Router) { }

  ngOnInit(): void {
  }

  LoginCliente() {
    this.cadastroService.login(this.login).subscribe(login => {
      if (login) {

    
        
        alert('Bem-Vindo Cliente');
        this.router.navigate(['']);
      } else {
        alert('Mais um erro de Cria');
      }
   }, error => {
     console.log(error);
     alert('Mais um erro de Cria');
   });
     
  }



  
    // this.router.navigate(['']);
  }

