import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISac } from 'src/app/model/ISac.model';
import { SacService } from 'src/app/services/sac.service';

@Component({
  selector: 'app-sac',
  templateUrl: './sac.component.html',
  styleUrls: ['./sac.component.css']
})
export class SacComponent implements OnInit {

  sacForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private sacService: SacService,
              private router: Router) { }

  ngOnInit(): void {
    this.sacForm = this.formBuilder.group(
      {
        problemaSac: ['', [Validators.required]],
        nomeSac: ['', [Validators.required]],
        telefoneSac: ['', [Validators.required]],
        emailSac: ['', [Validators.required, Validators.email]],
        descSac: ['', [Validators.required]]
      }
    )
  }

  enviarSac() {

    var dadosSac = this.sacForm.getRawValue() as ISac;

    this.sacService.cadastrar(dadosSac).subscribe(cadastro => {
      if (cadastro) {
        alert('Reclamação Enviada com Sucesso!');

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
