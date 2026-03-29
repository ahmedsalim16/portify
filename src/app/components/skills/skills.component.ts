import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone:false,
})
export class SkillsComponent {
  skills: string[] = [];
  newSkill = '';

  constructor(private fb: FirebaseService) {}

  addSkill() {
    if (this.newSkill.trim() !== '') {
      this.skills.push(this.newSkill);
      this.newSkill = '';
    }
  }

  removeSkill(i: number) {
    this.skills.splice(i, 1);
  }

  // async saveSkills() {
  //   const uid = this.fb.getUserId();
  //   if (!uid) {
  //     alert('You must be signed in to save skills.');
  //     return;
  //   }

  //   const db = (this.fb as any).db ?? this.fb['db'];
  //   await setDoc(doc(db, 'users', uid), {
  //     skills: this.skills
  //   }, { merge: true });

  //   alert('Skills Saved!');
  // }
  showToast = false;

async saveSkills() {
  const uid = this.fb.getUserId();
  if (!uid) return;

  const db = (this.fb as any).db ?? this.fb['db'];
  await setDoc(doc(db, 'users', uid), { skills: this.skills }, { merge: true });

  this.showToast = false;
  setTimeout(() => this.showToast = true, 10);
  setTimeout(() => this.showToast = false, 3100);
}
}
