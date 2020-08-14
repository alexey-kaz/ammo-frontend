import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxContentContainer]',
})
export class ContentContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
