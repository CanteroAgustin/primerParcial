import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { Producto } from 'src/app/models/producto';
import { ContenedoresService } from 'src/app/services/contenedores.service';

@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.scss']
})
export class CargarContainerComponent implements OnInit {

  containers: Container[] = [];
  container: Container;
  producto: Producto;

  constructor(private containersService: ContenedoresService) { }

  ngOnInit(): void {
    this.containersService.getContainers().valueChanges().subscribe(response => {
      this.containers = response;
    });
  }

  handlerSelection(container: Container) {
    this.container = container;
  }

  handleOnDetalleClick(producto: Producto) {
    this.producto = producto;
  }

  onActualizarHandler(container: Container) {
    this.containers.forEach(element => {
      if (element.codigo === container.codigo) {
        element.marca = container.marca;
        element.capacidad = container.capacidad;
        element.stock = this.container.stock + container.stock;
      }
    });
    this.container = { codigo: '', marca: '', capacidad: '', uid: '', productos: [], stock: 0 };
    this.containersService.actualizarContainer(container);
  }
}
