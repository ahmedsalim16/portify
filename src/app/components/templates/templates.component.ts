import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnInit {
  templates = [
    { id: 'template1', name: 'Dark Minimal', description: 'Clean & modern' },
    { id: 'template2', name: 'Glass Morphism', description: 'Creative layout' },
    { id: 'template3', name: 'Clean Light', description: 'Single page style' },
    { id: 'template4', name: 'Neon Terminal', description: 'landing page' },
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
