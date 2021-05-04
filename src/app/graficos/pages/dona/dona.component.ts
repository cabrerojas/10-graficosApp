import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100, 269],
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

  constructor() { }

  ngOnInit(): void {
  }

}
