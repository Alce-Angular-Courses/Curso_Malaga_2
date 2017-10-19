import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlacesComponent } from './enlaces.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  {
    path: '',
    component: EnlacesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnlacesComponent]
})
export class EnlacesModule { }
