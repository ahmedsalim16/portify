import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.css'
})
export class Template1Component {
@Input() user: any;
}
