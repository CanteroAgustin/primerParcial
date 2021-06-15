import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-container-abm',
  templateUrl: './container-abm.component.html',
  styleUrls: ['./container-abm.component.scss']
})
export class ContainerAbmComponent implements OnInit {

  containers: Container[];
  container: Container;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getContainers().valueChanges().subscribe(data => {
      this.containers = data;
    });
  }

  seleccionarContainer(container){
    this.container = container;
  }

}
