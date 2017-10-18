import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  declarations: [AppComponent, AcumuladorComponent, PieComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
