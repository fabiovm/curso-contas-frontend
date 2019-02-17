import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaixaService } from '../providers/caixa.service'
import { Caixa } from '../classes/caixa'


@Component({
  selector: 'app-caixa-crud',
  templateUrl: './caixa-crud.component.html',
  styleUrls: ['./caixa-crud.component.css']
})
export class CaixaCrudComponent implements OnInit {
  private id : string;
  private tipo : string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams.id || 0;
    this.tipo = this.route.snapshot.queryParams.tipo || "N";
  }

  public adicionarCaixa(caixa: Caixa) {
    //CaixaService.adicionarCaixa(caixa)

  }
}
