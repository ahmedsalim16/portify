import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template7',
  templateUrl: './template7.component.html',
  styleUrl: './template7.component.css'
})
export class Template7Component {
@Input() user: any;
currentYear = new Date().getFullYear();
  icons = ['📊', '🧠', '📈', '🔍', '⚡', '🎯'];
}
