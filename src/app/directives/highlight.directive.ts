import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export default class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input('highlight') subscription: string = '';
  ngOnInit() {
    if (this.subscription === 'premium') {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgb(228, 203, 72)');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weigth', 'bold');
    }
  }
}
