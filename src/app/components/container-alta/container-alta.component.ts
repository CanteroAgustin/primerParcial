import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/models/container';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-container-alta',
  templateUrl: './container-alta.component.html',
  styleUrls: ['./container-alta.component.scss']
})
export class ContainerAltaComponent implements OnInit {

  container;

  codigo = new FormControl('', Validators.required);
  marca = new FormControl('', Validators.required);
  capacidad = new FormControl('', Validators.required);
  @Output() onAltaContainer = new EventEmitter<Container>();

  containerFormGroup = new FormGroup({
    codigo: this.codigo,
    marca: this.marca,
    capacidad: this.capacidad
  });

  constructor() { }

  ngOnInit(): void {


  }

  darDeAlta() {
    this.container = this.containerFormGroup.value;
    this.onAltaContainer.emit(this.container);
    this.containerFormGroup.reset();
  }

}
