import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-acumulador',
    templateUrl: 'acumulador.component.html',
    styleUrls: ['./acumulador.component.css', './extra.css']
})

export class AcumuladorComponent implements OnInit {

    incremento: number;
    total: number;
    tamTitular: string;
    aClases: Array<string>;

    constructor() { }

    ngOnInit() {
        this.incremento = 10;
        this.total = this.incremento;
        this.tamTitular = 'titulargran';
        this.aClases = ['uno', 'dos', 'tres'];
    }

    // oClaseTotal = { positivo : (this.total >= 0),
    // negativo : (this.total < 0)}

    sumar = function(){
        // tslint:disable-next-line:radix
        this.total += parseInt(this.incremento);
    };

    restar = function(){
        // tslint:disable-next-line:radix
        this.total -= parseInt(this.incremento);
    };

}
