import { Component, OnInit } from '@angular/core';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent implements OnInit {

  login: ICadastroCliente = {
    nomeCadCliente: '',
    enderecoCadCliente: '',
    emailCadCliente: '',
    telCadCliente: '',
    cpfCadCliente: 0,
    senhaCadCliente: ''
  };

  constructor(private cadastroService: CadastroClienteService) { }

  ngOnInit(): void {
  }

  salvarCadastroCliente() {
    this.cadastroService.cadastrar(this.login).subscribe(login => {
      if (login) {
        
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
