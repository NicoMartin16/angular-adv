import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() public title: string = 'Sin titulo'
  @Input() public labels: string[] = ['Label1', 'Label2', 'Label3']
  @Input() public data: any[] = [];

  // Doughnut
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  // ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {backgroundColor: ['#6857e6', '#009fee', '#f02059']}
  ]

}
