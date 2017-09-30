import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-agregar-video',
  templateUrl: './agregar-video.component.html',
  styleUrls: ['./agregar-video.component.css']
})
export class AgregarVideoComponent implements OnInit {
  constructor( private http: Http) { }
  arreglo: Array<object>;
  list: string[] = ['nombre', 'titulo', 'edad'];
  parametros = { nombre: 'nombre', titulo: 'titulo' };
  ngOnInit() {
    console.log(this.list[1]);
  }

  nuevoVideo(): void {
      const parametroFalso = 'parametro falso';
    this.http.post('http://localhost/practicas/angularjs/api/agregarVideo.php', this.parametros)
    .subscribe((res: Response) => {
      console.log('se mando :' + this.parametros);
    });
  }



}
