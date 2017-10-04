import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response} from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer')
  videoPlayer: any;
  videoInfo: any;
  id: String;
  idvideo: any;
  rutaServer: String;
  numerosPositivos: number;
  numerosNegativos: number;

  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) { }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['videoID'];
      this.rutaServer = 'http://localhost/practicas/angularjs/api/uploads/';
      this.obtenerInfoVideo();
    });
  }

  obtenerInfoVideo(): void {
    this.http.request('http://localhost/practicas/angularjs/api/info-video.php?id=' + this.id)
    .subscribe((res: Response) => {
      this.videoInfo = res.json();
      for (let i = 0; i < this.videoInfo.length; i++) {
        const obj = this.videoInfo[i];
        this.idvideo = obj['uniqueID'];
        this.numerosPositivos = obj['reaccionPositiva'];
        this.numerosNegativos = obj['reaccionNegativa'];
      }
    });
  }

  reaccionVideo(Like) {
    const reaccion = {
      gustar: Like,
      idvideo: this.idvideo,
      numerosP: this.numerosPositivos,
      numerosN: this.numerosNegativos,
    };

    $.get('http://localhost/practicas/angularjs/api/reaccionVideo.php', reaccion, Procesar);

        function Procesar(datos_devueltos) {
            console.log(datos_devueltos);
        }
  }

}
