import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.scss']
})
export class ProductoListadoComponent implements OnInit {

  @Output() onDetalleClick = new EventEmitter<Producto>();
  productos: Producto[];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getProductos().valueChanges().subscribe(response => {
      this.productos = response;
    });
  }

  verDetalle(producto: Producto) {
    this.onDetalleClick.emit(producto);
  }

}
