import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container-update',
  templateUrl: './container-update.component.html',
  styleUrls: ['./container-update.component.scss']
})
export class ContainerUpdateComponent implements OnInit {

  @Input() container;

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
    this.containerFormGroup.patchValue({
      codigo: this.container.codigo,
      marca: this.container.marca,
      capacidad: this.container.capacidad
    })
  }

  actualizar(){
    
  }
}
