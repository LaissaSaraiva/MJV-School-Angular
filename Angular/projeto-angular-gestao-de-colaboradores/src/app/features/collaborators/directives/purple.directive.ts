import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPurple]',
})
export class PurpleDirective {
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'purple';
  }
}
