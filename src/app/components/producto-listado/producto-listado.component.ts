import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoAltaComponent } from '../producto-alta/producto-alta.component';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.scss']
})
export class ProductoListadoComponent implements OnInit {

  @Output() onDetalleClick = new EventEmitter<Producto>();
  @Input() productos: Producto[];
  subscription: any;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
    this.subscription = this.productosService.onAltaProducto.subscribe(()=>{
      this.productos = this.productosService.getProductos();
    })
  }

  verDetalle(producto: Producto) {
    this.onDetalleClick.emit(producto);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
