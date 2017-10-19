import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutoresComponent } from './autores/autores.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, CatalogoComponent, AutoresComponent, EnlacesComponent, AboutComponent],
  exports : [HomeComponent, CatalogoComponent, AutoresComponent, EnlacesComponent, AboutComponent]
})
export class MainModule { }
