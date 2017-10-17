import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-datos3',
  templateUrl: './datos3.component.html',
  styleUrls: ['./datos3.component.css']
})
export class Datos3Component implements OnInit {
  @ViewChild('inputNombre') eNombre: ElementRef;

  constructor() { }

  ngOnInit() {
    // this.sNombre = 'Pepe';
  }

  btnBorrar() {
    // this.sNombre = '';
    console.log(this.eNombre);
  }
}
