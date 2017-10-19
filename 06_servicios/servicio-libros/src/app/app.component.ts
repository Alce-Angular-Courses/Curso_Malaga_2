import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public aBooks: string[] = [];
  public inputTitle: string;

  constructor(private booksService: BooksService) { }

  searchTitle() {
    this.aBooks = this.booksService.getBooks(this.inputTitle);
    this.inputTitle = '';
  }
}
