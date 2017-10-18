import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datos1Component } from './datos1/datos1.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    Datos1Component,
    PadreComponent,
    HijoComponent
  ],
  exports: [
    Datos1Component,
    PadreComponent,
    HijoComponent
  ]
})
export class FormulariosModule { }
