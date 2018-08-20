import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {
  
  alerta: string = "alert-danger";
  spin: boolean = false;
  props:Object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    this.spin = true;
    setTimeout( ()=> {
      this.spin = false;
    }, 3000);
  }
}
