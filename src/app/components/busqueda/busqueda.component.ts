import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoAltaComponent } from '../producto-alta/producto-alta.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  producto: Producto;
  user;

  constructor(public authService: AuthService, private altaProducto: ProductoAltaComponent) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  handleOnDetalleClick(producto: Producto) {
    this.producto = producto;
  }

}
