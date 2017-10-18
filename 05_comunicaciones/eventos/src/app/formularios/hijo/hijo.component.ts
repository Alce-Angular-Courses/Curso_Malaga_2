
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() nombre: string;
  @Output() evento: EventEmitter<string>;
  nombrePrefe: string;
  
  constructor() { 
    this.evento = new EventEmitter;
  }

  ngOnInit() {
  }

  contestar () {
    this.nombre = "";
    this.evento.emit(this.nombrePrefe);
  }
}
