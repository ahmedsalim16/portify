import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrl: './template2.component.css'
})
export class Template2Component {
@Input() user: any;
}
