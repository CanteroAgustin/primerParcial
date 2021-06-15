import { Component, OnInit } from '@angular/core';
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

  containerFormGroup = new FormGroup({
    codigo: this.codigo,
    marca: this.marca,
    capacidad: this.capacidad
  });

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {


  }

  darDeAlta() {
    let existe;
    this.firestoreService.getContainer(this.codigo.value).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.container = doc.data();
        existe = true;
        console.log('Ya existe el container');
      });
      if(!existe){
        this.container = this.containerFormGroup.value;
        this.firestoreService.altaContainer(this.container).then(
          doc => {
            this.container.uid = doc.id;
            this.firestoreService.updateContainer(this.container.uid, this.container);
          }
        );
      }
      this.containerFormGroup.reset();
    })
    
    

  }

}
