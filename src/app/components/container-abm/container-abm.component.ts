import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-container-abm',
  templateUrl: './container-abm.component.html',
  styleUrls: ['./container-abm.component.scss']
})
export class ContainerAbmComponent implements OnInit {

  containers: Container[] = [];
  container: Container;

  constructor(private containersService: ContenedoresService) { }

  ngOnInit(): void {
    this.containersService.getContainers().valueChanges().subscribe(response => {
      this.containers = response;
    });
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
      this.containersService.grabar(container);
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
    this.container = { codigo: '', marca: '', capacidad: '', uid: '' };
    this.containersService.actualizarContainer(container);
  }

  onBorrarHandler() {
    this.containers = this.containers.filter(element => element.codigo !== this.container.codigo);
    this.containersService.borrarContainer(this.container);
    this.container = { codigo: '', marca: '', capacidad: '', uid: '' };
  }

}
