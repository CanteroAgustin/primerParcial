import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/models/container';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-container-update',
  templateUrl: './container-update.component.html',
  styleUrls: ['./container-update.component.scss']
})
export class ContainerUpdateComponent implements OnInit {

  @Input() container;
  @Output() onActualizar = new EventEmitter<Container>();

  codigo = new FormControl('', Validators.required);
  marca = new FormControl('', Validators.required);
  capacidad = new FormControl('', Validators.required);

  containerFormGroup = new FormGroup({
    codigo: this.codigo,
    marca: this.marca,
    capacidad: this.capacidad
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    if(this.container){
      this.containerFormGroup.patchValue({
        codigo: this.container.codigo,
        marca: this.container.marca,
        capacidad: this.container.capacidad
      })
    }
  }

  actualizar(){
    this.onActualizar.emit(this.containerFormGroup.value);
    this.containerFormGroup.reset();
  }
}
