import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone:false,
})
export class ProjectsComponent {
  project = {
    title: '',
    description: '',
    link: ''
  };

  projects: any[] = [];

  constructor(private fb: FirebaseService) {}

  addProject() {
    if (!this.project.title || !this.project.link) return;

    this.projects.push({ ...this.project });
    this.project = { title: '', description: '', link: '' };
  }

  removeProject(i: number) {
    this.projects.splice(i, 1);
  }

  // async saveProjects() {
  //   const uid = this.fb.getUserId();
  //   if (!uid) {
  //     alert('Not authenticated');
  //     return;
  //   }

  //   await setDoc(doc(this.fb['db'], 'users', uid), {
  //     projects: this.projects
  //   }, { merge: true });

  //   alert('Projects Saved!');
  // }
  showToast = false;

async saveProjects() {
  const uid = this.fb.getUserId();
  if (!uid) return;

  await setDoc(doc(this.fb['db'], 'users', uid), {
    projects: this.projects
  }, { merge: true });

  this.showToast = false;
  setTimeout(() => this.showToast = true, 10);
  setTimeout(() => this.showToast = false, 3100);
}
}
