import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastroAssociado } from 'src/app/model/ICadastroAssociado.model';
import { IProduto } from 'src/app/model/IProduto.model';
import { IServico } from 'src/app/model/IServico.model';
import { CadastroAssociadoService } from 'src/app/services/cadassoc.service';
import { CadastroClienteService } from 'src/app/services/cadcliente.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-associado',
  templateUrl: './associado.component.html',
  styleUrls: ['./associado.component.css']
})
export class AssociadoComponent implements OnInit {

  cadastro: ICadastroAssociado = {
    nomeCadAssociado: '',
    enderecoCadAssociado: '',
    emailCadAssociado: '',
    tipoCadAssociado: '',
    telCadAssociado: '',
    cnpjCadAssociado: 0,
    senhaCadAssociado: '',
    confsenhaCadAssociado: ''
  };

  listarAssociados: ICadastroAssociado[] = [];
  listarProdutos: IProduto[] = [];
  listarServicos: IServico[] = [];

  constructor(
    private cadastroService: CadastroAssociadoService,
    private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
    //this.carregarAssociados();

    
  }

  /*carregarAssociados() : void{
    this.cadastroService.buscarTodos().subscribe(retorno => {
      this.listarAssociados = retorno;
    })
  };*/


  carregarProdutos() : void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listarProdutos = retorno;
    })
  };

  // deletarProdutos(produto: IProduto) : void {
  //   this.produtosService.excluir(produto.id!).subscribe(() => {
  //     this.carregarProdutos();
  //   });
  // };


  salvarCadastroAssoc(): void {
    this.cadastroService.cadastrar(this.cadastro).subscribe(retorno => {
      this.cadastro = retorno;
    });
    this.router.navigate(['']);
  }

}
