import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent {

  alerta: string = 'info';
  aColores: string[] = ['success', 'info', 'warning', ''];
  index: number = 0;

  constructor() { }

  cambio() {
    this.alerta = this.aColores[this.index];
    this.index++;
    if (this.index === this.aColores.length) {
      this.index = 0;
    }
  }

}
