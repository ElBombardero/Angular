import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {

  constructor( private http: Http) { }

  ngOnInit() {
  }

OcultarContenido() {
  if ($('#contenido').is(':visible')) {
      $('#contenido').hide('slow');
      console.log('ocultando contenido');
  } else {
      $('#contenido').show('slow');
      console.log('mostrando contenido');
  }
}

}
