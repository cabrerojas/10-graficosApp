import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private http: HttpClient) { }

  getUsuariosRRSS() {
    return this.http.get('http://localhost:3000/grafica');
  }

}
