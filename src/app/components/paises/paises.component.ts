import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  private mipais: string;

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.mipais = this.paisesService.getPaisActual();
    this.paisesService.getAll().subscribe(response => {
      console.log(response);
    });
  }

}
