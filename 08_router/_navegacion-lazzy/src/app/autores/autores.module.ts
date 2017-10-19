import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresComponent } from './autores.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  {
    path: '',
    component: AutoresComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutoresComponent]
})
export class AutoresModule { }
