import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public sAutor: string;
  public sEmpresa: string;
  public sLugar: string;
  public sFecha: string;

  constructor() { }

  ngOnInit  () {
    this.sAutor = 'Alejandro L. Cerezo';
    this.sEmpresa = 'Icono TC';
    // this.sLugar = 'Madrid';
    this.sLugar = 'Málagga';
    this.sFecha = '2017';
  }
}


