import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Libro {
  titulo: string,
  autor: string,
  editorial: string,
  fecha: string
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // propiedad de tipo FormGroup (grupo de controles)
  // que se asociara a un formulario o subformulario (en casos complejos)

  formLibros: FormGroup;
  aLibros: Array<Libro>;

  // Se inyecta formBuilder para instaciar el FormGroup
  // correspondiente a la propiedad que se acaba de definir
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.aLibros = [];

    // Gracias al servicio FormBiulder, se instancia un FormGroup
    // pándole como parámetro el objeto con la definición del formulario
    // con los formControlNames asignados en la vista

    // forControlName="titulo"
    // forControlName="autor"
    // forControlName="editorial"
    // forControlName="fecha">

    this.formLibros = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: [''],
      fecha: ['2017']
    });
  } // Fin del ngOnInit

  enviarFormLibros () {

    if (this.formLibros.valid) {
      console.log (this.formLibros.value);
      this.aLibros.push(this.formLibros.value)
    }
  }
}
