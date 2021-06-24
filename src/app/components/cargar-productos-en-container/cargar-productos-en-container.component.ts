import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-cargar-productos-en-container',
  templateUrl: './cargar-productos-en-container.component.html',
  styleUrls: ['./cargar-productos-en-container.component.scss']
})
export class CargarProductosEnContainerComponent implements OnInit {

  @Output() onActualizar = new EventEmitter<Container>();
  @Input() container;
  @Input() producto;
  productos: Producto[] = [];

  codigo = new FormControl('', Validators.required);
  marca = new FormControl('', Validators.required);
  capacidad = new FormControl('', Validators.required);
  stock = new FormControl('', [Validators.required, this.forbiddenNameValidator()]);
  productoC = new FormControl('');

  containerFormGroup = new FormGroup({
    codigo: this.codigo,
    marca: this.marca,
    capacidad: this.capacidad,
    stock: this.stock,
    producto: this.productoC
  });

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.container) {
      this.codigo = this.container.codigo;
      this.capacidad = this.container.capacidad;
      this.containerFormGroup.patchValue({
        codigo: this.container.codigo,
        marca: this.container.marca,
        capacidad: this.container.capacidad
      })
    }

    if (this.producto) {
      this.containerFormGroup.patchValue({
        producto: this.producto
      })
    }
  }

  actualizar() {
    this.containerFormGroup.patchValue({
      codigo: this.container.codigo,
      marca: this.container.marca,
      capacidad: this.container.capacidad,
      producto: this.producto
    })
    this.onActualizar.emit(this.containerFormGroup.value);
    this.containerFormGroup.reset();
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let forbidden;
      let capacidadReal;
      if (this.container) {
        capacidadReal = this.container.capacidad - this.container.stock;
      }

      if (this.producto && (control.value > this.producto.stock || control.value > capacidadReal)) {
        forbidden = true;
      }

      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

}
