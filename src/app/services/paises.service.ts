import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private paisActual: string;

  constructor(private http: HttpClient) {
    this.paisActual = 'Argentina';
  }

  setPaisActual(pais: string) {
    this.paisActual = pais;
  }

  getPaisActual() {
    return this.paisActual;
  }

  getAll(){
    return this.http.get<Pais[]>('https://restcountries.eu/rest/v2/all');
  }
}
