import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {

  sesion: String = 'No autorizado';
  constructor( private http: Http) { }

  ngOnInit() {
    $('#agregar-video').css({'visibility': 'hidden', });
    this.mostrarContenido();
  }

mostrarContenido() {
  if (this.sesion !== 'No autorizado' && this.sesion !== '') {
      $('#agregar-video').css({
        'visibility': 'visible',
       });
  }
}

}
