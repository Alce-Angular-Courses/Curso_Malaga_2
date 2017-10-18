import { Component, OnInit } from '@angular/core';


interface Usuario {
  firstname: string;
  lastname: string;
  phoneNumber: string;

}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

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
