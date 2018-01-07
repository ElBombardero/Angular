import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  idComentario: any;
  numerosPositivos: number;
  numerosNegativos: number;
  comentarios: Array<Object>;

  constructor(private http: Http, private http2: Http) { }
  @Input() idUnica: any;
  ngOnInit() {
    this.verComentarios();
    this.textarea();
  }
  verComentarios() {
    this.http.request('http://localhost/practicas/angularjs/api/comentarios-idvideo.php?id=' + this.idUnica)
    .subscribe( (res: Response) => {
      this.comentarios = res.json();
    });
  }

  reaccionar(Like, ID, RN, RP) {
    const reaccion = {
      gustar: Like,
      idcomentario: ID,
      numerosP: RP,
      numerosN: RN,
    };

    $.get('http://localhost/practicas/angularjs/api/reaacionComentario.php', reaccion, Procesar);

        function Procesar(datos_devueltos) {
            console.log(datos_devueltos);
        }
  }

  comentar() {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const datosFormulario = {
      comentario: $('#comentar-text').val(),
      usuario: 'invitado',
      fecha: fecha.getDate() + '/' + mes + '/' + fecha.getFullYear(),
      videoID: this.idUnica,
      avatar: 'http://cdn.lowkickmma.com/wp-content/uploads/2017/05/Jon-Jones--640x449.jpg',
    };
    $.get('http://localhost/practicas/angularjs/api/agregarComentario.php', datosFormulario, ProcesarDatos);

    function ProcesarDatos(datos_devueltos) {
        console.log(datos_devueltos);
    }

    this.verComentarios();
    $('#comentar-text').val('');
  }

  textarea() {
    $('.theinput-2').focus(function() {
      $('.contenedor').css('border-color', 'LightSteelBlue');
    }).blur(function() {
      $('.contenedor').css('border-color', 'Silver');
    });
  }

}
