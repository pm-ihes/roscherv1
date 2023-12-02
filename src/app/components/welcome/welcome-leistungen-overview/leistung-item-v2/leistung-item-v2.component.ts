import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leistung-item-v2',
  templateUrl: './leistung-item-v2.component.html',
  styleUrls: ['./leistung-item-v2.component.css']
})
export class LeistungItemV2Component {

  @Input()
  imageSrc: string = "";

  @Input()
  title: string = "";

  @Input()
  text: string = "";

}
