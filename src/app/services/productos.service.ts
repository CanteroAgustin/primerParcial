import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../models/producto';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  producto: Producto;
  productos: Producto[] = [];
  @Output() onAltaProducto = new EventEmitter<any>();


  constructor(private firestoreService: FirestoreService) { 
    
  }

  getFromBase(){
    return this.firestoreService.getProductos().valueChanges();
  }

  altaProducto(producto: Producto){
    this.productos.push(producto);
    this.onAltaProducto.emit();
    this.grabar(producto);
  }

  getProductos(){
    return this.productos;
  }

  grabar(producto){
    this.firestoreService.saveProductos(producto);
  }
}
