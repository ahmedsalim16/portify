import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrl: './template4.component.css'
})
export class Template4Component {
@Input() user: any;
}
