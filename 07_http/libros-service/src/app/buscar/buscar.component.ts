import { Component, OnInit } from '@angular/core';
import { BooksService } from '../servicios/booksRx.service';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<any>;

  constructor(private bookService: BooksService ) { }

  ngOnInit() {
    this.claveBusqueda = '';
    this.aResultados = [];
  }

  btnBuscar() {
    this.aResultados = [];

    this.bookService.getBooks(this.claveBusqueda)
     .subscribe(
      books => this.aResultados = books,
      error => console.error(error)
     ); // Fin del suscribe
  } // Fin de la función btnBuscar

}

