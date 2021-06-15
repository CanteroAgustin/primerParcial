import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  collection: AngularFirestoreCollection<any> | undefined;
  containersPath = '/containers';

  constructor(private firestore: AngularFirestore) {

  }

  saveResutGame(datos: any, collectionPath: string) {
    this.collection = this.firestore.collection(collectionPath);
    return this.collection.add({ ...datos });
  }

  getProductos() {
    this.collection = this.firestore.collection('/productos');
    return this.collection;
  }

  getUserCompleto(uid: string) {
    let docRef = this.firestore.collection('/users').doc(uid);
    return docRef.get();
  }

  altaContainer(container: Container) {
    this.collection = this.firestore.collection(this.containersPath);
    return this.collection.add({ ...container });
  }

  getContainers() {
    this.collection = this.firestore.collection(this.containersPath);
    return this.collection;
  }

  updateContainer(id: any, datos: any): Promise<void> {
    this.collection = this.firestore.collection(this.containersPath);
    return this.collection.doc(id).update(datos);
  }

  getContainer(codigo) {
    const usersRef = this.firestore.collection(this.containersPath).ref;
    var query = usersRef.where("codigo", "==", codigo);
    return query.get();
  }
}
