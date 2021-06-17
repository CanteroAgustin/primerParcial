import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit {

  @Input() containers: Container[];
  @Output() onContainerSelected = new EventEmitter<Container>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarContainer(container) {
    this.onContainerSelected.emit(container);
  }
  
}
