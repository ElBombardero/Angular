import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var tinyMCE: any;
@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css']
})
export class AgregarArticuloComponent implements OnInit {

  tyni: string;
  tyniP: any;
  constructor() { }

  ngOnInit() {
  }

  agregarArticulo () {
    this.tyni = tinyMCE.get('contenido').getContent();
    this.tyniP = tinyMCE.get('contenido').getContent();
    console.log(this.tyni);
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const datosFormulario = {
    titulo: $('#titulo').val(),
    autor: 'El Rudo',
    imagenURL: $('#imagen').val(),
    contenido: tinyMCE.get('contenido').getContent(),
    contenidoP: tinyMCE.get('contenidoP').getContent(),
    fecha: fecha.getDate() + '/' + mes + '/' + fecha.getFullYear(),
    };
    $.get('http://localhost/practicas/angularjs/api/agregarArticulo.php', datosFormulario, ProcesarDatos);

    function ProcesarDatos(datos_devueltos) {
        console.log(datos_devueltos);
    }

    $('#contenedorT').html(this.tyni);
  }
}
