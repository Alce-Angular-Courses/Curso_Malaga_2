import { Component, OnInit } from '@angular/core';


interface Usuario {
  firstname: string;
  lastname: string;
  phoneNumber: string;

}

@Component({
  selector: 'app-formulario_base',
  templateUrl: './formulario_base.component.html',
  styleUrls: ['./formulario_base.component.css']
})
export class Formulario_baseComponent implements OnInit {

  user: Usuario;

  constructor() { }

  ngOnInit() {
    this.user = {firstname: '', lastname: '', phoneNumber: '' };
  }

  borrar () {
    this.user = {firstname: '', lastname: '', phoneNumber: '' };
    console.log('Infomación eliminada');
  }

  enviar () {
    console.log('Infomación enviada');
  }
}
