import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaixaListaComponent } from './caixa-lista/caixa-lista.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaixaCrudComponent } from './caixa-crud/caixa-crud.component';
import { CaixaService } from '../app/providers/caixa.service'

@NgModule({
  declarations: [
    AppComponent,
    CaixaListaComponent,
    NavbarComponent,
    HomeComponent,
    CaixaCrudComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CaixaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
