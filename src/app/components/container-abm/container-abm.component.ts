import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';

@Component({
  selector: 'app-container-abm',
  templateUrl: './container-abm.component.html',
  styleUrls: ['./container-abm.component.scss']
})
export class ContainerAbmComponent implements OnInit {

  containers: Container[] = [];
  container: Container;

  constructor() { }

  ngOnInit(): void {
  }

  onAltaContainerHandler(container: Container) {
    let existe = false;
    this.containers.forEach(element => {
      if (element.codigo === container.codigo) {
        existe = true;
      }
    });
    if (!existe) {
      this.containers.push(container);
    }

  }

  handlerSelection(container: Container) {
    this.container = container;
  }

  onActualizarHandler(container: Container) {
    this.containers.forEach(element => {
      if (element.codigo === container.codigo) {
        element.marca = container.marca;
        element.capacidad = container.capacidad;
      }
    });
    this.container = { codigo: '', marca: '', capacidad: '' };
  }

  onBorrarHandler() {
    this.containers = this.containers.filter(element => element.codigo !== this.container.codigo);
    this.container = { codigo: '', marca: '', capacidad: '' };
  }

}
