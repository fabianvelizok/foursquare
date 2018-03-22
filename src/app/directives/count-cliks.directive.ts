import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: 'a[count-clicks]'
})

export class CountClicks {
  clicks: number = 0;
  // Edit dom
  @HostBinding('style.opacity') opacity: number = 0.1;
  // Listen events
  @HostListener('click', ['$event.target']) onClick(btn) {
    this.clicks += 1;
    console.log('Clicks', this.clicks);
    this.opacity += 0.1;
  }
}
