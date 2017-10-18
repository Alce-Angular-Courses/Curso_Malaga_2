import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppPieComponent } from './app-pie/app-pie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario_baseComponent } from './formulario_base/formulario_base.component';

@NgModule({
  declarations: [AppComponent, AppPieComponent, FormularioComponent, Formulario_baseComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
