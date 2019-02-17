import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaixaService } from '../providers/caixa.service'
import { Caixa } from '../classes/caixa'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-caixa-crud',
  templateUrl: './caixa-crud.component.html',
  styleUrls: ['./caixa-crud.component.css']
})

export class CaixaCrudComponent implements OnInit {
  public id: string;
  public tipo: string;
  public teste: string;


  constructor(
    private toastr: ToastrService,
    public caixa: Caixa,
    private route: ActivatedRoute,
    private router: Router,
    private caixaService: CaixaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams.id || 0;
    this.tipo = this.route.snapshot.queryParams.tipo || "N";
    if (this.tipo == "A") {
      this.getCaixas(this.id);
    }

  }

  public adicionarCaixa(caixa: Caixa) {
    this.caixaService.adicionarCaixa(caixa);
  }

  public getCaixas(_id) {
    this.caixaService.getCaixas(_id)
      .subscribe(
        result => {
          console.log(result);
          this.caixa = result;
        },
        error => {
          this.toastr.error('Caixa', error, {
            timeOut: 3000
          });
          console.log(error);
        }
      );
  }

  public removerCaixa(_id) {
    this.caixaService.removerCaixa(_id);
  }

  public atualizarCaixa(caixa: Caixa) {
    this.caixaService.atualizarCaixa(caixa._id, caixa);
  }


  
  public adicionarCredito() {
    this.toastr.success('Caixa', 'Adicionado mais credito.');
    this.caixa.credito.push({ name: "", value: 0 })
  }

  public removerCredito(index) {
    this.caixa.credito.splice(index, 1);
  }

  public adicionarDebito() {
    this.caixa.debito.push({ name: "", value: 0, status: "" })
  }

  public removerDebito(index) {
    this.caixa.debito.splice(index, 1);
  }

}
