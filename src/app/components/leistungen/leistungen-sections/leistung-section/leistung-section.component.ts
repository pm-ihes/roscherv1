import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leistung-section',
  templateUrl: './leistung-section.component.html',
  styleUrls: ['./leistung-section.component.css']
})
export class LeistungSectionComponent {

  @Input()
  leistung: any;

}
