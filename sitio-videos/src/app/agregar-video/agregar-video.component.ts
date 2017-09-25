import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-agregar-video',
  templateUrl: './agregar-video.component.html',
  styleUrls: ['./agregar-video.component.css']
})
export class AgregarVideoComponent implements OnInit {
  constructor( private http: Http ) { }
  arreglo: Array<object>;
  parametros = { nombre: 'nombre', titulo: 'titulo' };
  ngOnInit() {
  }

  nuevoVideo(): void {
      const parametroFalso = 'parametro falso';
    this.http.post('http://localhost/practicas/angularjs/api/agregarVideo.php', this.parametros)
    .subscribe((res: Response) => {
      console.log('se mando la vaina');
    });
  }

  enviarDatos() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const order = 'order=foobar';

    this.http.post('http://myserver/processorder.php', order, {
    }).subscribe(res => {
        console.log('post result %o', res);
    });
  }

}
