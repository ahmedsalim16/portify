import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnInit {
templates = [
  { id: 'template1', name: 'Dark Minimal', description: 'Sleek dark design' },
  { id: 'template2', name: 'Glass Morphism', description: 'Glassmorphism style' },
  { id: 'template3', name: 'Clean Light', description: 'Professional light' },
  { id: 'template4', name: 'Neon Terminal', description: 'Cyberpunk vibes' },
  { id: 'template5', name: 'Frontend Dev', description: 'GitHub-inspired' },
  { id: 'template6', name: 'Backend Dev', description: 'VS Code-inspired' },
  { id: 'template7', name: 'Data Analyst', description: 'Dashboard style' },
];

  selectedTemplate = '';
  uid:any;
  constructor(private fb: FirebaseService) {}

  async ngOnInit() {
    const user = await this.fb.getUserData(this.uid);
    this.selectedTemplate = user?.['selectedTemplate'] || '';
  }

  selectTemplate(id: string) {
    this.selectedTemplate = id;
  }

  // async saveTemplate() {
  //   if (!this.selectedTemplate) return alert('Choose template first');

  //   await this.fb.updateUser({
  //     selectedTemplate: this.selectedTemplate,
  //   });

  //   alert('Template saved!');
  // }
  showToast = false;

async saveTemplate() {
  if (!this.selectedTemplate) return;

  await this.fb.updateUser({ selectedTemplate: this.selectedTemplate });

  this.showToast = false;
  setTimeout(() => this.showToast = true, 10);
  setTimeout(() => this.showToast = false, 3100);
}
}
