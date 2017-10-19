import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     { path: 'home', loadChildren: './home/home.module#HomeModule'},
     { path: 'autores', loadChildren: './autores/autores.module#AutoresModule' },
     { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
     { path: 'enlaces', loadChildren: './enlaces/enlaces.module#EnlacesModule' },
     { path: 'about', loadChildren: './about/about.module#AboutModule' },
     { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
