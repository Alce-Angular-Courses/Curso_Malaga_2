import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabezaComponent } from './cabeza/cabeza.component';

@NgModule({
  declarations: [AppComponent, PieComponent, FormularioComponent, CabezaComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
