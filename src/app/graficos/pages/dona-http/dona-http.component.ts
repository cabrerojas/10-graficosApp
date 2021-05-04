import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficosService } from '../../services/graficos.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {


  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
    ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 269],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
   {
     backgroundColor: [
       '#A0EB92',
       '#FFB870',
       '#B475EB',
     ]
   }
 ];

  constructor(private graficosService: GraficosService) { }

  ngOnInit(): void {

    // this.graficosService.getUsuariosRRSS()
    //       .subscribe( data => {
    //         const labels = Object.keys( data );
    //         const values = Object.values( data );

    //         this.doughnutChartLabels = labels;
    //         this.doughnutChartData.push(values);

    //       } );

    this.graficosService.getUsuariosRrssDonaData().subscribe(
      ({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);

      }
    );

  }

}
