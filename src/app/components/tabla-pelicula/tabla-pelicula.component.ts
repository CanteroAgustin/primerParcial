import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() onDetalleClick = new EventEmitter<Pelicula>();
  peliculas: Pelicula[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculasService.peliculas;
    this.onDetalleClick.emit(this.peliculas[0]);
  }

  verDetalle(pelicula: Pelicula) {
    this.onDetalleClick.emit(pelicula);
  }
}
