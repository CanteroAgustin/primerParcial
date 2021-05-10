import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises: Pais[] = [];
  @Output() onCountrySelected = new EventEmitter<Pais>();

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.getAll().subscribe(response => {
      let count = 0;
      this.paises = response.filter(pais => {
        if (count < 10) {
          count++;
          return pais;
        }
      });
    });
  }

  selectCountry(country: Pais) {
    this.onCountrySelected.emit(country);
  }
}
