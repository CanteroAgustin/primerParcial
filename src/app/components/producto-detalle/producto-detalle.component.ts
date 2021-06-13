import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {

  @Input() producto: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
