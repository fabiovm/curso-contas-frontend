import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CaixaService } from '../app/providers/caixa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CaixaService]
})
export class AppComponent {
  title = 'curso-contas-frontend';
  faCoffee = faCoffee;
}
