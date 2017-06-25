import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';


// Componentes 
//-------------------------------------------------------------------------
import { AppComponent }             from './app.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { TecnologiasComponent }     from './tecnologias/tecnologias.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    TecnologiasComponent,
    FooterComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
