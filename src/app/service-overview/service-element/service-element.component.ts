import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-element',
  templateUrl: './service-element.component.html',
  styleUrls: ['./service-element.component.css']
})
export class ServiceElementComponent {

  @Input()
  title: string = "";

  @Input()
  imageSource: string = "";

  @Input()
  text: string = "";

}
