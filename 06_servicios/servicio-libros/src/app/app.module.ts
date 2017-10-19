// Elementos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
// Componentes
import { AppComponent } from './app.component';
// Injectables (Servicios)
import { BooksService } from './books.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  bootstrap: [AppComponent],
  providers: [BooksService]
})
export class AppModule { }
