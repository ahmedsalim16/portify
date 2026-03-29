import {
  Directive,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('active');
          observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: 0.15
      }
    );

    this.el.nativeElement.classList.add('reveal');
    observer.observe(this.el.nativeElement);
  }
}
