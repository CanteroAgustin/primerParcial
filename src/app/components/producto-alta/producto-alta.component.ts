import { Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/models/pais';
import { Producto } from 'src/app/models/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProductosService } from 'src/app/services/productos.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-producto-alta',
  templateUrl: './producto-alta.component.html',
  styleUrls: ['./producto-alta.component.scss']
})
export class ProductoAltaComponent implements OnInit {

  public altaForm: FormGroup;
  collectionPath = '/productos';
  pais = new Pais;

  constructor(private fb: FormBuilder, private router: Router, private productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.altaForm = this.fb.group({
      'codigo': ['', [Validators.required]],
      'descripcion': ['', Validators.required],
      'precio': ['', Validators.required],
      'stock': ['', Validators.required],
      'pais': ['', Validators.required],
      'comestible': ['', Validators.required]
    });
  }

  private validadorEspacio(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const tieneEspacios = nombre.includes(' ');

    if (tieneEspacios) {
      return tieneEspacios ? { contiene: true } : null;
    }
  }

  enviar() {
    let datos = {...this.altaForm.value};
    datos.pais = this.pais;
    //this.firestoreService.saveResutGame(datos, this.collectionPath);
    this.productosService.altaProducto(datos);
    this.router.navigate(['busqueda'])
  }

  onCountrySelectedHandler(pais: Pais) {
    this.pais = pais;
    this.altaForm.patchValue({
      pais: pais.name
    });
  }

}
