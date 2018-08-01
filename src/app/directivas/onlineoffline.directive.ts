import {
  Directive,
  HostListener,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appOnlineoffline]'
})
export class OnlineofflineDirective {
  // @HostBinding('value') online: boolean = false;
  @Input('online') online: boolean;
  @HostListener('click')
  onclick() {
    this.online = !this.online;
    console.log(!this.online);
  }
  constructor(private el: ElementRef) {}
}
