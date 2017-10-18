import { Component, OnInit, style } from '@angular/core';

@Component({
    selector: 'app-cabeza',
    template: `
    <header>
	    <h1>{{titulo}}!</h1>
    </header>
    <app-logo></app-logo>
    `,
    styles: [`header {
                text-align: center;
                font-size: 1.8em;
                color : papayawhip;}`]
})

export class CabezaComponent implements OnInit {

    titulo: string;
    constructor() { }

    ngOnInit() {
        this.titulo = 'Formularios';
    }
}
