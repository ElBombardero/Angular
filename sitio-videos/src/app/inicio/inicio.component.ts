import { Component, OnInit, Output } from '@angular/core';
import {Http, Response} from '@angular/http';
declare var $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  sesion: String = 'No autorizado';
  articulos: Array<object>;
  constructor(private http: Http) { }

  ngOnInit() {
    $('#agregar-articulo1').css({'visibility': 'hidden', });
    $('#agregar-articulo2').css({'visibility': 'hidden', });
    $('#agregarArticulo').css({'visibility': 'hidden', });
    this.peticionExterna();
    this.mostrarContenido();
  }


peticionExterna(): void {

    this.http.request('http://localhost/practicas/angularjs/api/lista-de-articulos.php')
    .subscribe( (res: Response) => {
      this.articulos = res.json();
      console.log( res.json() );
    });
  }

mostrarContenido() {
  if (this.sesion !== 'No autorizado' && this.sesion !== '') {
      $('#agregar-articulo1').css({'visibility': 'visible', });
      $('#agregar-articulo2').css({'visibility': 'visible', });
  }
}

}
