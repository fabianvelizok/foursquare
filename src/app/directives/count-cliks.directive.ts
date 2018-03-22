import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: 'a[count-clicks]'
})

export class CountClicks {
  clicks: number = 0;
  @HostListener('click', ['$event.target']) onClick(btn) {
    this.clicks += 1;
    console.log('Clicks', this.clicks);
  }
}
