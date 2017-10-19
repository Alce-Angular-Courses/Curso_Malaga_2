import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
// componentes
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
// Servicio
import { BookService } from './book.service';
// Routing
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, BookDetailComponent, BookListComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  bootstrap: [AppComponent],
  providers: [BookService]
})
export class AppModule { }

