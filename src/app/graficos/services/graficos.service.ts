import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private http: HttpClient) { }

  getUsuariosRRSS(): Observable< Object > {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRrssDonaData(): Observable<{labels: string[]; values: any[]; }> {
    return this.getUsuariosRRSS().pipe(
      map( data => {
        const labels = Object.keys( data );
        const values = Object.values( data );
        return {labels, values};
      })
    );
  }

}
