import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  constructor(private fb: FirebaseService, private router: Router) {}

  logout() {
    this.fb.logout();
    this.router.navigate(['/login']);
  }
}