import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';

@Component({
  selector: 'app-associado-login',
  templateUrl: './associado-login.component.html',
  styleUrls: ['./associado-login.component.css']
})
export class AssociadoLoginComponent implements OnInit {

  loginForm!: FormGroup;

  // login: ICadastroAssociado = {
  //   associadoId: 0,
  //   nomeCadAssociado: '',
  //   enderecoCadAssociado: '',
  //   emailCadAssociado: '',
  //   telCadAssociado: '',
  //   cnpjCadAssociado: '',
  //   senhaCadAssociado: ''
  // };

  constructor(private formBuilder: FormBuilder,
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
        alert('Bem-Vindo Associado');
      }, error => {
           console.log(error);
          alert('Associado Não Cadastrado');
      }
    )
  }

}
