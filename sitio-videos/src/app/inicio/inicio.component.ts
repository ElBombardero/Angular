import { Component, OnInit, Output } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  articulos: Array<object>;
  constructor(private http: Http) { }

  ngOnInit() {
    this.peticionExterna();
  }


peticionExterna(): void {

    this.http.request('http://localhost/practicas/angularjs/api/lista-de-articulos.php')
    .subscribe( (res: Response) => {
      this.articulos = res.json();
      console.log( res.json() );
    });
  }

}
