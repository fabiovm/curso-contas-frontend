import { Component, OnInit } from '@angular/core';
import { CaixaService } from '../providers/caixa.service'
import { Caixa } from '../classes/caixa'
import { Router } from '@angular/router';

@Component({
  selector: 'app-caixa-lista',
  templateUrl: './caixa-lista.component.html',
  styleUrls: ['./caixa-lista.component.css']
})
export class CaixaListaComponent implements OnInit {

  public caixaLista = Caixa;
  public listCaixa = [];

  constructor(
    private _route: Router,
    private caixaService : CaixaService) { }

  ngOnInit() {
    this.listarCaixas()
  }

  public listarCaixas (){
    return this.caixaService.listarCaixas()
      .subscribe(listCaixa => this.listCaixa = listCaixa);

  }

  // public removerCaixa () {
  //   ///
  // }

  public alterarCaixa (tipo : string, _id : string){
    this._route.navigate(['/novo'], { queryParams: { tipo: tipo, id: _id }});
    }

}
