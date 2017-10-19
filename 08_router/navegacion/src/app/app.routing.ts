import { EnlacesComponent } from './main/enlaces/enlaces.component';
import { AutoresComponent } from './main/autores/autores.component';
import { AboutComponent } from './main/about/about.component';
import { CatalogoComponent } from './main/catalogo/catalogo.component';
import { HomeComponent } from './main/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);
