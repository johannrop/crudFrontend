import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importar (HttpClientModule y FormsModule) este servicio para utilizar la API
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
