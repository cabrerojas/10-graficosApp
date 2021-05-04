import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnInit {

  @Input() horizontal = false;

  @Input() barChartLabels: Label[] = [
    // '2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ];
  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Enero', backgroundColor: '#BDC2F2', hoverBackgroundColor: 'grey'  },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Febrero', backgroundColor: '#B5C3DB', hoverBackgroundColor: 'grey' },
    // { data: [8, 38, 80, 89, 16, 57, 60], label: 'Marzo', backgroundColor: '#BDDFF2', hoverBackgroundColor: 'grey' }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;



  constructor() { }

  ngOnInit(): void {

    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }

  }

}
