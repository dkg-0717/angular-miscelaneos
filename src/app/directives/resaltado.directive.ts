import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  constructor( private el: ElementRef ) {
    console.log('Directiva llamada');
    el.nativeElement.style.backgroundColor = 'yellow'; 
   }
}
