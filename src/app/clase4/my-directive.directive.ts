import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(
    private elementRef: ElementRef,
    // objects that modifies properties of the html visual element
    private renderer: Renderer2
  ) { 
    renderer.setStyle(elementRef.nativeElement, 'color', 'blue');
  }

}
