import { ICadastroCliente } from './../../../model/ICadastroCliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  // cadastro: ICadastroCliente = {
  //   clienteId: 0,
  //   nomeCadCliente: '',
  //   enderecoCadCliente: '',
  //   emailCadCliente: '',
  //   telCadCliente: '',
  //   cpfCadCliente: '',
  //   senhaCadCliente: ''
  // };


  constructor(private cadastroService: CadastroClienteService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        nomeCadCliente: ['', [Validators.required]],
        enderecoCadCliente: ['', [Validators.required]],
        emailCadCliente: ['', [Validators.required, Validators.email]],
        telCadCliente: ['', [Validators.required]],
        cpfCadCliente: ['', [Validators.required]],
        senhaCadCliente: ['', [Validators.required]]

      }
    )
  }


  salvarCadastroCliente() {

    var dadosCadastro = this.cadastroForm.getRawValue() as ICadastroCliente;

    this.cadastroService.cadastrar(dadosCadastro).subscribe(cadastro => {
      if (cadastro) {
        alert('Cliente Cadastrado com Sucesso');
        this.router.navigate(['/login-cliente']);
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
