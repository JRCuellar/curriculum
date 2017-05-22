import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';


// Componentes 
//-------------------------------------------------------------------------
import { AppComponent }             from './app.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent
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
