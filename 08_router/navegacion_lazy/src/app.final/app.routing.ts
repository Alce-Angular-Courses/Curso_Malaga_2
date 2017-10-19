import { AboutComponent } from './about/about.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AutoresComponent } from './autores/autores.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

// cada ruta se identifica por su path y su componente
// en este ejemplo inicio, catalogo, autores, enlaces about
const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'about', component:  AboutComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);
