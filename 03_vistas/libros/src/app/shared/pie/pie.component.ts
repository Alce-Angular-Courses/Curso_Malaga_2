import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  formador: string;
  empresa: string;
  fecha: Date;

  constructor() {
   }

  ngOnInit() {
    this.formador = 'Alejandro Cerezo Lasne';
    this.empresa = 'Icono Training Consulting';
    this.fecha = new Date();
  }

}
