
import { ICadastroAssociado } from './../../../model/ICadastroAssociado.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-associado-cadastro',
  templateUrl: './associado-cadastro.component.html',
  styleUrls: ['./associado-cadastro.component.css']
})
export class AssociadoCadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  // cadastro: ICadastroAssociado = {
  //   associadoId: 0,
  //   nomeCadAssociado: '',
  //   enderecoCadAssociado: '',
  //   emailCadAssociado: '',
  //   telCadAssociado: '',
  //   cnpjCadAssociado: '',
  //   senhaCadAssociado: ''
  // };


  constructor(private cadastroService: CadastroAssociadoService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        nomeCadAssociado: ['', [Validators.required]],
        emailCadAssociado: ['', [Validators.required, Validators.email]],
        enderecoCadAssociado: ['', [Validators.required]],
        telCadAssociado: ['', [Validators.required]],
        cnpjCadAssociado: ['', [Validators.required]],
        senhaCadAssociado: ['', [Validators.required]]

      }
    )
  }


  salvarCadastroAssociado() {

    var dadosCadastro = this.cadastroForm.getRawValue() as ICadastroAssociado;

    this.cadastroService.cadastrar(dadosCadastro).subscribe(cadastro => {
      if (cadastro) {
        Swal.fire({icon: 'success',
        title: 'Associado Cadastrado com Sucesso',
        text: 'Entre agora',
        showConfirmButton: true,
        confirmButtonColor: '#ffd13a'});
        this.router.navigate(['/login-associado']);
      } else {
        Swal.fire({icon: 'error',
        title: 'Falha ao Cadastrar Associado',
        text: 'Algo deu errado',
        showConfirmButton: true,
        confirmButtonColor: '#ffd13a'});
      }
   }, error => {
     console.log(error);
     //alert('Email de Usuário Já Existe');
     Swal.fire({icon: 'error',
      title: 'Email de usuário já existe!',
      showConfirmButton: true,
      confirmButtonColor: '#ffd13a',});
   });
    // this.router.navigate(['']);
  }

}
