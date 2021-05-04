import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../../services/graficos.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficosService: GraficosService) { }

  ngOnInit(): void {

    this.graficosService.getUsuariosRRSS()
          .subscribe( data => {
            console.log(data); 
          } );
  }

}
