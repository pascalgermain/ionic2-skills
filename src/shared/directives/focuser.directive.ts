import { Directive, Renderer, ElementRef } from '@angular/core';
import { Keyboard } from 'ionic-native';

@Directive({
  selector: '[focuser]'
})
export class FocuserDirective {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector('input');

    setTimeout(() => {
      this.renderer.invokeElementMethod(element, 'focus', []);
      Keyboard.show();
    }, 0);
  }
}
