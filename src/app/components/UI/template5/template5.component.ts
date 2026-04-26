import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template5',
  templateUrl: './template5.component.html',
  styleUrl: './template5.component.css'
})
export class Template5Component {
@Input() user: any;
ngOnInit() {
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, 100);
}
}

