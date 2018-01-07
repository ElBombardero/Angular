import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-agregar-video',
  templateUrl: './agregar-video.component.html',
  styleUrls: ['./agregar-video.component.css']
})
export class AgregarVideoComponent implements OnInit {
  constructor( private http: Http) { }

  @Output()

  ngOnInit() {
  }

  agregarVideo () {
    const datosFormulario = {
    clave: $('#Clave').val(),
    titulo: $('#Titulo').val(),
    descripcion: $('#Descripcion').val(),
    videoURL: $('#Video-url').val(),
    imagenURL: $('#imagen-url').val(),
    };
    $.get('http://localhost/practicas/angularjs/api/agregarVideo.php', datosFormulario, ProcesarDatos);

    function ProcesarDatos(datos_devueltos) {
        console.log(datos_devueltos);
    }
  }



}
