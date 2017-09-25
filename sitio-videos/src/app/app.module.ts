import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { HttpModule } from '@angular/http';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ContenidoIzquierdoComponent } from './contenido-izquierdo/contenido-izquierdo.component';
import { ContenidoDerechoComponent } from './contenido-derecho/contenido-derecho.component';
import { AgregarVideoComponent } from './agregar-video/agregar-video.component';
import { VideosComponent } from './videos/videos.component';
import { SliderComponent } from './slider/slider.component';

// Definir rutas
const rutasApp = [
  { path: 'lista-video', component: ListaDeVideosComponent} ,
  { path: 'buscador/:buscado', component: BuscadorComponent} ,
  { path: 'video-player/:videoID', component: VideoPlayerComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'slider', component: SliderComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent,
    BuscadorComponent,
    PieDePaginaComponent,
    InicioComponent,
    ComentariosComponent,
    ContenidoIzquierdoComponent,
    ContenidoDerechoComponent,
    AgregarVideoComponent,
    VideosComponent,
    SliderComponent
  ],
  imports: [
    // importar rutas
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
