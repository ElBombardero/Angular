import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styleUrls: ['./ver-articulo.component.css']
})
export class VerArticuloComponent implements OnInit {

  id: number;
  informacionArticulo: any;
  contenidoA: any;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['articuloID'];
      this.obtenerInfoArticulo();
    });
  }



  obtenerInfoArticulo(): void {
    this.http.request('http://localhost/practicas/angularjs/api/info-articulos.php?id=' + this.id)
    .subscribe((res: Response) => {
      this.informacionArticulo = res.json();
      for (let i = 0; i < this.informacionArticulo.length; i++) {
        const obj = this.informacionArticulo[i];
        this.contenidoA = obj['contenidoArticulo'];
      }
    });
  }
  ver() {
    $('#contenedor').html(this.contenidoA);
  }

}
