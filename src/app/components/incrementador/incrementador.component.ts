import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') public progreso: number = 40
  @Input() btnClass: string = 'btn btn-primary'


  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter<number>()
  // @Input() public progreso: number = 40;

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  changeValue(valor: number) {

    if(this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit();
      this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number) {
    if( nuevoValor >= 100 ) {
      nuevoValor = 100;
    }

    if(nuevoValor <= 0) {
      nuevoValor - 0;
    }
    this.valorSalida.emit(nuevoValor);
  }

}
