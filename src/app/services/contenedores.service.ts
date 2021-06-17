import { Injectable } from '@angular/core';
import { Container } from '../models/container';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ContenedoresService {

  constructor(private firestoreService: FirestoreService) { }

  grabar(container: Container) {
    this.firestoreService.saveContainer(container);
  }

  actualizarContainer(container){
    this.firestoreService.actualizarContainer(container);
  }

  getContainers() {
    return this.firestoreService.getContainers();
  }

  borrarContainer(container){
    this.firestoreService.borrarContainer(container);
  }
}
