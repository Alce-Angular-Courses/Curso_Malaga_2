import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logoPath: string;
  constructor() { }

  ngOnInit() {
    this.logoPath = '../../../assets/icono.png';
  }

}
