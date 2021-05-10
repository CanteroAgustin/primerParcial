import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/models/pais';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-producto-alta',
  templateUrl: './producto-alta.component.html',
  styleUrls: ['./producto-alta.component.scss']
})
export class ProductoAltaComponent implements OnInit {

  public altaForm: FormGroup;
  img: string;
  collectionPath = '/productos';

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.altaForm = this.fb.group({
      'nombre': ['', [Validators.required, this.validadorEspacio]],
      'apellido': ['', Validators.required],
      'edad': ['', Validators.required],
      'pais': ['', Validators.required]
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
    //this.firestoreService.saveResutGame(this.altaForm.value, this.collectionPath);
  }

  onCountrySelectedHandler(pais: Pais) {
    this.img = pais.flag;
    this.altaForm.patchValue({
      pais: pais.name
    });
  }

}
