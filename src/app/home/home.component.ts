import { Component, OnInit } from '@angular/core';
import { CaixaService } from '../providers/caixa.service';
//Chart.js
import { Chart } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public listCaixa = [];
  chart: Chart;

  constructor(private caixaService : CaixaService) { }

  ngOnInit() {
    this.listarCaixas();
    
  }

  public listarCaixas(){
    return this.caixaService.listarCaixas()
      .subscribe(listCaixa => {
        this.listCaixa = this.totalizarCaixas(listCaixa);
        this.createGraph(this.listCaixa);
        console.log(this.listCaixa);
      }) ;
  }

  private totalizarCaixas (listCaixa: any){
    let creditoTotal = 0;
    let debitoTotal = 0;
    for (let i = 0; i < listCaixa.length; i++) {
      for (let x = 0; x < listCaixa[i].credito.length; x++) {
        creditoTotal = creditoTotal + listCaixa[i].credito[x].value;
      }
      for (let x = 0; x < listCaixa[i].debito.length; x++) {
        debitoTotal = debitoTotal + listCaixa[i].debito[x].value;
      }     
      listCaixa[i].creditoTotal = creditoTotal;
      listCaixa[i].debitoTotal = debitoTotal;
      creditoTotal = 0;
      debitoTotal = 0;     
    }
    return listCaixa;
  }

  createGraph(listCaixa) {
    let labels = [];
    let creditoTotal = [];
    let debitoTotal = [];

    for (let y = 0; y < listCaixa.length; y++) {
      labels.push(listCaixa[y].name);
      creditoTotal.push(listCaixa[y].creditoTotal);
      debitoTotal.push(listCaixa[y].debitoTotal);
    }

    this.chart = new Chart('chartAddress', {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{ 
              label: 'Credito',
              data: creditoTotal,
              backgroundColor: 'rgba(228, 1, 1, 0.48)',
              borderColor: 'rgba(149, 19, 19, 1)',
              borderWidth: 2
            },
            { 
              label: 'Debito',
              data: debitoTotal,
              backgroundColor: 'rgb(1, 42, 224)',
              borderColor: 'rgb(0, 31, 168)',
              borderWidth: 2
            }          
          ]
        },
        options: {
            title: {
                display: true
            },
            legend: {
                display: true
            },
            tooltips: {
                enabled: true,
            },
            scaleShowValues: true,
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true
                }],
            }
        }
    });
}



}
