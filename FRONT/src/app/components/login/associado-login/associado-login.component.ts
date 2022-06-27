import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-associado-login',
  templateUrl: './associado-login.component.html',
  styleUrls: ['./associado-login.component.css']
})
export class AssociadoLoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;

  // login: ICadastroAssociado = {
  //   associadoId: 0,
  //   nomeCadAssociado: '',
  //   enderecoCadAssociado: '',
  //   emailCadAssociado: '',
  //   telCadAssociado: '',
  //   cnpjCadAssociado: '',
  //   senhaCadAssociado: ''
  // };

  constructor(private formBuilder: UntypedFormBuilder,
              private cadastroService: CadastroAssociadoService,
              private autenticacaoService: AutenticacaoService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        emailCadAssociado: ['', [Validators.required, Validators.email]],
        senhaCadAssociado: ['', [Validators.required]]
      }
    )
  }

  LoginAssociado() {

    var dadosLogin = this.loginForm.getRawValue() as ICadastroAssociado;
    this.cadastroService.login(dadosLogin).subscribe(
      tokenAssociado => {
        this.autenticacaoService.DefineToken(tokenAssociado);
        sessionStorage.setItem('Associado', 'Perfil');
        this.router.navigate(['/perfil-associado']);

        Swal.fire({icon: 'success',
          title: 'Bem-Vindo Associado',
          text: 'Entre agora!',
          showConfirmButton: false,
          timer: 1800
        })
      }, error => {
           console.log(error);
           Swal.fire( {icon: 'error',
             title: 'Associado Não Cadastrado',
             text: 'Revise as credenciais',
             showConfirmButton: false,
             timer: 1800
            });
      }
    )
  }

}
