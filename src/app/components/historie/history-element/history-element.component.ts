import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-element',
  templateUrl: './history-element.component.html',
  styleUrls: ['./history-element.component.css']
})
export class HistoryElementComponent {

  @Input()
  left: boolean = true;

  @Input()
  title: string = "";

  @Input()
  date: string = "";

  @Input()
  message: string = "";

  @Input()
  image: boolean = false;

  @Input()
  imageSource: string = "";

  @Input()
  imageHeight: string = "";

  @Input()
  translateTop: string = "";
}
