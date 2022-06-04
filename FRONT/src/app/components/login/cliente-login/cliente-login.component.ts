import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICadastroCliente } from 'src/app/model/ICadastroCliente.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent implements OnInit {

  loginForm!: FormGroup;

  // login: ICadastroCliente = {
  //   clienteId: 0,
  //   nomeCadCliente: '',
  //   enderecoCadCliente: '',
  //   emailCadCliente: '',
  //   telCadCliente: '',
  //   cpfCadCliente: '',
  //   senhaCadCliente: '',
  // };

  constructor(private formBuilder: FormBuilder,
              private autenticacaoService: AutenticacaoService,
              private cadastroService: CadastroClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        emailCadCliente: ['', [Validators.required, Validators.email]],
        senhaCadCliente: ['', [Validators.required]]
      }
    )
  }

  LoginCliente() {

    var dadosLogin = this.loginForm.getRawValue() as ICadastroCliente;

    this.cadastroService.login(dadosLogin).subscribe(
      tokenCliente => {
        this.autenticacaoService.DefineToken(tokenCliente);
        sessionStorage.setItem('Cliente', 'Perfil');
        this.router.navigate(['/perfil-cliente']);
       
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bem-Vindo Cliente',
          showConfirmButton: false,
          timer: 1800
        })
      }, error => {
           console.log(error);
           Swal.fire('Cliente Não Cadastrado', 'Revise as credenciais', 'error');
      }
    )
  }

}
