import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { doc, getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  standalone:false,
})
export class PreviewComponent {
  user: any = {
    profile: {},
    skills: [],
    projects: [],
    socialLinks: []
  };

  constructor(private fb: FirebaseService) {
    this.loadData();
  }

  selectedTemplate = 'template1';

  



  async ngOnInit() {
    const uid = this.fb.getUserId();
    if (!uid) return;
      
    const data = await this.fb.getUserData(uid);
    if (!data) return;
    this.user = data;
    this.selectedTemplate = data['selectedTemplate'] || 'template1';
  }
  
  async loadData() {
    const uid = this.fb.getUserId();
    if (!uid) {
      console.warn('No user ID available; skipping loadData.');
      return;
    }
    const snap = await getDoc(doc(this.fb['db'], 'users', uid));
    this.user = snap.data() ?? this.user;
  }

  publishedLink = '';
copied = false;

publishPortfolio() {
  const username = this.user?.profile?.username;
  if (!username) {
    alert('لازم تحط username الأول في صفحة الـ Profile!');
    return;
  }
  this.publishedLink = `https://portify-ca3c2.web.app/portfolio/${username}`;
}

copyLink() {
  navigator.clipboard.writeText(this.publishedLink);
  this.copied = true;
  setTimeout(() => this.copied = false, 2000);
}
}
