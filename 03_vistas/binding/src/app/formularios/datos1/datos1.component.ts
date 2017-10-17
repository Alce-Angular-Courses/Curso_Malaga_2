import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  sNombre: string;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
  }

  btnBorrar() {
    this.sNombre = '';
  }
}
