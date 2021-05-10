import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  pelicula: Pelicula;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  handleOnDetalleClick(pelicula: Pelicula) {
    this.pelicula = pelicula;
  }
}
