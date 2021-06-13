import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() pais: Pais;

  constructor() { }

  ngOnInit(): void {
  }

}
