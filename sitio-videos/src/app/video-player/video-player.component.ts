import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer')
  videoPlayer: any;
  duracion: string;
  progreso: number;
  posicion: string;
  css: string;
  posicionBarra: string;

  videoInfo: any;
  id: String;
  rutaServer: String;

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
      this.videoInfo = res.json()[0];
    });
  }

  reproducirVideo(): void {
    this.videoPlayer.nativeElement.play();
  }

  detenerVideo(): void {
    this.videoPlayer.nativeElement.currentTime = 70;
  }

  pausarVideo(): void {
    if (this.videoPlayer.nativeElement.play()) {
      this.videoPlayer.nativeElement.pause();
    }else {
      this.videoPlayer.nativeElement.play();
    }
  }

  moverVideo(): void {
    this.videoPlayer.nativeElement.currentTime = 20;
  }

  onMetadata(e, video): void {
    const minutos = Math.floor(video.duration / 60);
    const segundos =  Math.floor(video.duration);

    this.duracion = '( ' + minutos + ':' + segundos;
  }
  onTimeUpdate(e, video): void {
    this.progreso = Math.floor((video.currentTime / video.duration) * 100);
    const posicionBarra = this.progreso;
    const minutos = Math.floor(video.currentTime / 60);
    const segundos =  Math.floor(video.currentTime);
  this.posicion = minutos + ':' + segundos;
  const css: HTMLElement = document.getElementById('myBar');
  css.style.width = posicionBarra + '%';
  }

}
