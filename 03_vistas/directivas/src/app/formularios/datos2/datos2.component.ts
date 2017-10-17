import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos2',
  templateUrl: './datos2.component.html',
  styleUrls: ['./datos2.component.css']
})
export class Datos2Component implements OnInit {
  sNombre: string;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
  }

  btnBorrar() {
    this.sNombre = '';
  }
}
