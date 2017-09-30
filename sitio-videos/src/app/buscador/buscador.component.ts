import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response} from '@angular/http';
declare var $: any;
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  rutaServer: string;
  textoBuscado: String;
  valorPrueba: String = 'valor';
  tag: String;
  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {
    this.rutaServer = 'http://localhost/practicas/angularjs/api/uploads/';
    this.route.params.subscribe( params => {
      this.textoBuscado = params ['buscado'];
      this.buscar();
    });
  }
  public buscar() {
    let texto = '';
    this.tag = this.textoBuscado;
    if ( this.textoBuscado === '') {
      this.tag = $('#b').val();
    }
    $('#imagenes').text('cargando...');
    $.getJSON ('http://api.flickr.com/services/feeds/photos_public.gne?tags=' +
    this.tag + '&tagmode=any&format=json&jsoncallback=?', function(datos){
      $.each(datos.items, function(i, item){
        texto += '<div style=\'display:inline-block; width: 250px;\' >';
        texto += '<img src=\'' + item.media.m + '\'/>';
        texto += '<p><strong style=\'color:#00BFFF\'>titulo:</strong><small>' + item.title + '</small></p>';
        texto += '<p><a href=\'' + item.link + '\'>Link</a></p>';
        texto += '</div>';
      });
    $('#imagenes').html(texto);
    });
    this.textoBuscado = '';
  }
}
