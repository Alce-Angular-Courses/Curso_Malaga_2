import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  getBooks(title: string) {

    const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + title;

    return this.http.get(url).subscribe(
       response => {
         console.log(response);
         const data = response.json();
         const aResultados = [];
         for (let i = 0; i < data.items.length; i++) {
           const bookTitle = data.items[i].volumeInfo.title;
           aResultados.push(bookTitle);
         }
         console.log(aResultados);
       }
    );
  }

  // private extractTitles(response: Response) {
  //   return response.json().items.map(book => book.volumeInfo.title);
  // }
}
