import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-element',
  templateUrl: './partner-element.component.html',
  styleUrls: ['./partner-element.component.css']
})
export class PartnerElementComponent {

  @Input()
  name: string = '';

  @Input()
  imageSource: string = '';

  @Input()
  link: string = '';

}
