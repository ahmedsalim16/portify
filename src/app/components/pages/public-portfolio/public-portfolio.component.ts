import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../../firebase.service';

@Component({
  selector: 'app-public-portfolio',
  templateUrl: './public-portfolio.component.html',
  standalone: false
})
export class PublicPortfolioComponent implements OnInit {
  user: any = null;
  loading = true;
  notFound = false;

  constructor(private route: ActivatedRoute, private fb: FirebaseService) {}

  async ngOnInit() {
  const username = this.route.snapshot.paramMap.get('username');
  console.log('USERNAME FROM URL:', username);

  if (!username) { 
    this.notFound = true; 
    this.loading = false;
    return; 
  }

  const data = await this.fb.getUserByUsername(username);
  console.log('DATA FROM FIREBASE:', data);

  if (!data) {
    this.notFound = true;
  } else {
    this.user = data;
  }
  this.loading = false;
}
}