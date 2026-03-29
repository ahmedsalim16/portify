import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:false,

})
export class HomeComponent {
constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
    this.initParticles();
  }

  initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = ['#6366f1', '#a855f7', '#3b82f6', '#818cf8'];

    const createParticle = () => {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + 50 + '%';
      const duration = 4 + Math.random() * 6;
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = Math.random() * 4 + 's';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(p);
      setTimeout(() => p.remove(), (duration + 4) * 1000);
    };

    for (let i = 0; i < 20; i++) setTimeout(createParticle, i * 300);
    setInterval(createParticle, 800);
  }
}
