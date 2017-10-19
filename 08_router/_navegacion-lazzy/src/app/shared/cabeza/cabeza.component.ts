import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  public curso: string;
  constructor() { }

  ngOnInit() {
    this.curso = 'Angular 4.x';
  }

}
