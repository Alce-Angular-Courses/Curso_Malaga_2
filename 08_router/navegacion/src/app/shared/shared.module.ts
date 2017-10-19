import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CabezaComponent,
    PieComponent,
    LogoComponent,
    MenuComponent
  ],
  exports : [
    CabezaComponent,
    MenuComponent,
    PieComponent]
})
export class SharedModule { }
