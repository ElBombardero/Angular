import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Array<Object>;
  rutaServer: String;

  constructor( private http: Http) { }

  ngOnInit() {
    this.videos = [];
    this.rutaServer = 'http://localhost/practicas/angularjs/api/uploads/';
    this.peticionExterna();
  }
peticionExterna(): void {

  this.http.request('http://localhost/practicas/angularjs/api/lista-de-videos.php')
  .subscribe( (res: Response) => {
    this.videos = res.json();
  });
}

borrarVideo(IdVideo): void {
  const confirmar = confirm('Eliminar ?');
  if (confirmar === true) {
    this.http.delete('http://localhost/practicas/angularjs/api/borrarVideo.php?id=' + IdVideo)
    .subscribe((res: Response) => {
      console.log('Registro Borrado');
      this.peticionExterna();
    });
  }
}

}
