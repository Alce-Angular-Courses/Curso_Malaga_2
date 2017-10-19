// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos de la Aplicación
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routing';

// No puede exister referencia a aquellos módulos que deben cargrase de forma Lazzy
// import { HomeModule } from './home/home.module';
// import { CatalogoModule } from './catalogo/catalogo.module';
// import { AutoresModule } from './autores/autores.module';
// import { EnlacesModule } from './enlaces/enlaces.module';
// import { AboutModule } from './about/about.module';


// Componentes del Modulo
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
