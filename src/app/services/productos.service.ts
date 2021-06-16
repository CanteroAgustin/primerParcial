import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  producto: Producto;
  productos: Producto[] = [];
  @Output() onAltaProducto = new EventEmitter<any>();


  constructor() { }

  altaProducto(producto: Producto){
    this.productos.push(producto);
    this.onAltaProducto.emit();
  }

  getProductos(){
    return this.productos;
  }

}
