import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<string>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.claveBusqueda = '';
    this.aResultados = [];
  }

  btnBuscar() {
    this.aResultados = [];
    this.http.get(URL + this.claveBusqueda)
    .subscribe(
      response => {
        console.log(response.json());
        const data = response.json();
        for (let i = 0; i < data.items.length; i++) {
          const bookTitle = data.items[i].volumeInfo.title;
          this.aResultados.push(bookTitle);
        }
    },
      error => console.error(error)); // Fin del suscribe
  } // Fin de la función btnBuscar

}

// response => {

