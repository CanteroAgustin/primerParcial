import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/models/container';

@Component({
  selector: 'app-container-delete',
  templateUrl: './container-delete.component.html',
  styleUrls: ['./container-delete.component.scss']
})
export class ContainerDeleteComponent implements OnInit {

  @Input() container;
  @Output() onBorrar = new EventEmitter<Container>();

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

  borrar(){
    this.onBorrar.emit();
    this.containerFormGroup.reset();
  }
}
