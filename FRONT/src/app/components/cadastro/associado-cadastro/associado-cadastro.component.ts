
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
        alert('Associado Cadastrado com Sucesso');
        Swal.fire('Associado Cadastrado com Sucesso', 'Entre agora', 'success');
        this.router.navigate(['/login-associado']);
      } else {
        Swal.fire('Falha ao Cadastrar Usuário', 'Algo deu errado', 'error');
      }
   }, error => {
     console.log(error);
     alert('Email de Usuário Já Existe');
   });
    // this.router.navigate(['']);
  }

}
