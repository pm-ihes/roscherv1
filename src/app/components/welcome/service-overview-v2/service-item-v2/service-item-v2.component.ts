import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item-v2',
  templateUrl: './service-item-v2.component.html',
  styleUrls: ['./service-item-v2.component.css']
})
export class ServiceItemV2Component {

  @Input()
  imageSrc: string = "";

  @Input()
  title: string = "";

  @Input()
  text: string = "";

}
