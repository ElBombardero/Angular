import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {
  fecha: Date;
  dia: number;
  mes: number;
  anio: number;
  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
    this.dia = this.fecha.getDate();
    this.mes = this.fecha.getMonth() + 1;
    this.anio = this.fecha.getFullYear();
  }

}
