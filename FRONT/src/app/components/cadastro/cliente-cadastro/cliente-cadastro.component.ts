import { ICadastroCliente } from './../../../model/ICadastroCliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
        Swal.fire({icon: 'success',
        title: 'Cliente Cadastrado com Sucesso',
        text: 'Entre agora',
        showConfirmButton: true,
        confirmButtonColor: '#ffd13a'});
        this.router.navigate(['/login-cliente']);
      } else {
        Swal.fire({icon: 'error',
        title: 'Falha ao Cadastrar Cliente',
        text: 'Algo deu errado',
        showConfirmButton: true,
        confirmButtonColor: '#ffd13a'});
      }
   }, error => {
     console.log(error);
     //alert('erro interno do sistema');
     Swal.fire({icon: 'error',
      title: 'Email de usuário já existe!',
      showConfirmButton: true,
      confirmButtonColor: '#ffd13a',});
   });
    // this.router.navigate(['']);
  }

}
