
import { ICadastroAssociado } from './../../../model/ICadastroAssociado.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-associado-cadastro',
  templateUrl: './associado-cadastro.component.html',
  styleUrls: ['./associado-cadastro.component.css']
})
export class AssociadoCadastroComponent implements OnInit {

  cadastroForm!: UntypedFormGroup;


  constructor(private cadastroService: CadastroAssociadoService,
              private formBuilder: UntypedFormBuilder,
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

    Swal.fire({icon: 'warning',
      title: 'Saiba que nosso site trabalha com comissões, em que cada reserva, efetuada pelo cliente, será cobrado uma porcentagem e um valor fixo',
      text: 'Você concorda com os termos ?',
      timer: 15800,
      showCancelButton: true,
      confirmButtonText: 'Não',
      cancelButtonText: 'Sim',
      confirmButtonColor: '#ff0000',
      cancelButtonColor: '#00ff00'
    })
    .then(result => {
       if(result.value){
         this.router.navigate(['//'])
         .then(() => {
           window.location.reload();
         });
       }
    })

  }



  salvarCadastroAssociado() {

    var dadosCadastro = this.cadastroForm.getRawValue() as ICadastroAssociado;

    this.cadastroService.cadastrar(dadosCadastro).subscribe(cadastro => {
      if (cadastro) {
        Swal.fire({icon: 'success',
        title: 'Cadastrado feito com Sucesso',
        text: 'Entre agora',
        showConfirmButton: true,
        confirmButtonColor: '#ffd13a'});
        this.router.navigate(['/login-associado']);
      } else {
        Swal.fire({icon: 'error',
        title: 'Falha ao Cadastrar',
        text: 'Algo deu errado',
        showConfirmButton: true,
        confirmButtonColor: '#ffd13a'});
      }
   }, error => {
     console.log(error);
     Swal.fire({icon: 'error',
      title: 'Email de usuário já existe!',
      showConfirmButton: true,
      confirmButtonColor: '#ffd13a',});
   });
  }

}
