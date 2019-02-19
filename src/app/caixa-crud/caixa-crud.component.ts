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
    this.caixaService.adicionarCaixa(caixa)
    .subscribe(
      result => {
        console.log(result);
        this.toastr.success('Adicionada com sucesso.', 'Caixa');
        this.router.navigate(['lista']);
      },
      error => {
        this.toastr.error(error.error.errors[0], 'Caixa', {
          timeOut: 3000
        });
        console.log(error);
      }
    );

  }

  public getCaixas(_id) {
    this.caixaService.getCaixas(_id)
      .subscribe(
        result => {
          this.caixa = result;
        },
        error => {
          this.toastr.error(error.error.errors[0], 'Caixa', {
            timeOut: 3000
          });
        }
      );
  }

  public removerCaixa(_id) {
    this.caixaService.removerCaixa(_id)
    .subscribe(
      result => {
        this.toastr.success('Removida com sucesso.', 'Caixa');
        console.log(result);
       // this.caixa = result;
      },
      error => {
        this.toastr.error(error.error.errors[0], 'Caixa', {
          timeOut: 3000
        });
      }
    );

  }

  public atualizarCaixa(caixa: Caixa) {
    this.caixaService.atualizarCaixa(caixa._id, caixa) 
    .subscribe(
      result => {
        console.log(result);
        this.toastr.success('Atualizada com sucesso.', 'Caixa');
        this.caixa = result;
      },
      error => {
        this.toastr.error(error.error.errors[0], 'Caixa', {
          timeOut: 3000
        });
      }
    );
  }


  
  public adicionarCredito() {
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
