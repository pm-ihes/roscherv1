import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karriere-stellen-element',
  templateUrl: './karriere-stellen-element.component.html',
  styleUrls: ['./karriere-stellen-element.component.css']
})
export class KarriereStellenElementComponent {

  @Input()
  stellenData: any;

  overviewOpen = false;

  toggleOverview(){
    this.overviewOpen = !this.overviewOpen;
  }


}
