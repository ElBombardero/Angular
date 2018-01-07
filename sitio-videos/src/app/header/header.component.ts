import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario: string;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }
  textoescrito(s) {
    const texto = ($('#elementoescrito').val());
    this.router.navigate(['buscador/', texto]);
  }

  logerarse(formulario) {

    /*console.log(formulario.correo);
    this.http.post('http://localhost/practicas/angularjs/api/login.php', {'correo': formulario.correo})
    .subscribe( (res: Response) => {
      console.log( res);
    });*/
    $.get('http://localhost/practicas/angularjs/api/login.php', formulario, ProcesarDatos);
    function ProcesarDatos(datos_devueltos) {
        console.log(datos_devueltos);
        if (datos_devueltos !== 'No autorizado') {
          $('#login').text(datos_devueltos);
          $('#dropmenu').css({
            'visibility': 'hidden',
           });
        }else {
          $('#error').text(datos_devueltos);
        }
    }
  }
}
