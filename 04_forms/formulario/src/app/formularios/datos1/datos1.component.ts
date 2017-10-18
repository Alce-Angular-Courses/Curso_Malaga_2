import { Component, OnInit } from '@angular/core'
import { Libro, Pais} from '../libro.model';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  oLibro: Libro;
  aPaises: Array<Pais>;
  estaEnviado: boolean;

  constructor() { }

  ngOnInit() {
    this.btnBorrar();
    this.aPaises = [
      {codigo: 'UK', nombre: 'Inglaterra'},
      {codigo: 'US', nombre: 'USA'},
      {codigo: 'FR', nombre: 'Francia'},
      {codigo: 'SP', nombre: 'España'}
    ];
  }

  btnInsert() {
    this.estaEnviado = true;
  }

  btnBorrar() {
    this.estaEnviado = false;
    this.oLibro = {
      autor: '',
      titulo: '',
      editorial: '',
      numpag: 0,
      exlibris: false,
      genero: '',
      pais: {codigo: '', nombre: ''}
    };
    console.log(this.estaEnviado);
  }
}
