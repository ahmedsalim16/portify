import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  standalone:false,
})
export class SocialLinksComponent {
  socialLinks: any[] = [];
  social = { platform: '', link: '' };

  constructor(private fb: FirebaseService) {}

  addLink() {
    if (!this.social.platform || !this.social.link) return;

    this.socialLinks.push({ ...this.social });
    this.social = { platform: '', link: '' };
  }

  removeLink(i: number) {
    this.socialLinks.splice(i, 1);
  }

  // async saveLinks() {
  //   const uid = this.fb.getUserId();

  //   if (!uid) {
  //     alert('No user ID found. Please sign in.');
  //     return;
  //   }

  //   await setDoc(doc((this.fb as any).db, 'users', uid), {
  //     socialLinks: this.socialLinks
  //   }, { merge: true });

  //   alert('Social Links Saved!');
  // }
  showToast = false;

async saveLinks() {
  const uid = this.fb.getUserId();
  if (!uid) return;

  await setDoc(doc((this.fb as any).db, 'users', uid), {
    socialLinks: this.socialLinks
  }, { merge: true });

  this.showToast = false;
  setTimeout(() => this.showToast = true, 10);
  setTimeout(() => this.showToast = false, 3100);
}
}
