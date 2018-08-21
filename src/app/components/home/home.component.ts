import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>
      Hola mundo desde app.component
  </p>
  <app-classes></app-classes>
  <p [appResaltado]="'orange'"> Hola mundo </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnChanges() {
    console.log('onchanges');
  }

  ngDoCheck() {
    console.log('docheck');
  }

  ngAfterContentInit() {
    console.log('afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('aftercontentChecked');
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
