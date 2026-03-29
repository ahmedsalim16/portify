import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrl: './template3.component.css'
})
export class Template3Component {
@Input() user: any;
}
