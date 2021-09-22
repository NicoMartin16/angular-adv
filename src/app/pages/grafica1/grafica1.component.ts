import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels: string[] = ['Pan', 'Refresco', 'Tacos'];

  public data = [
    [100, 200, 500],
  ];

}
