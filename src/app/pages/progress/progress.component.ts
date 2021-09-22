import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]

})
export class ProgressComponent {

  public progreso1: number = 25
  public progreso2: number = 35

  
  public get getProgreso1() : string {
    return `${this.progreso1}%`
  }

  public get getProgreso2() : string {
    return `${this.progreso2}%`
  }

  
}
