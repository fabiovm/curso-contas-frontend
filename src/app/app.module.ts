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
import { CaixaService } from '../app/providers/caixa.service';
import { Caixa } from '../app/classes/caixa';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

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
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ToastNoAnimationModule.forRoot()
  ],
  providers: [CaixaService, Caixa],
  bootstrap: [AppComponent]
})
export class AppModule { }
