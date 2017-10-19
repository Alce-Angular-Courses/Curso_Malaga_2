import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogoComponent]
})
export class CatalogoModule { }
