import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaListaComponent } from './caixa-lista/caixa-lista.component';
import { HomeComponent } from './home/home.component';
import { CaixaCrudComponent } from './caixa-crud/caixa-crud.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'lista',  component: CaixaListaComponent},
  { path: 'novo', component: CaixaCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
