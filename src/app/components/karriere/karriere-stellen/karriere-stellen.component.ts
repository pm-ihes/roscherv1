import { Component } from '@angular/core';
import { Stelle } from 'src/app/models/stelle';

@Component({
  selector: 'app-karriere-stellen',
  templateUrl: './karriere-stellen.component.html',
  styleUrls: ['./karriere-stellen.component.css']
})
export class KarriereStellenComponent {

  stellen: Stelle[] = [
    {
      id: 1,
      name: "Installateur",
      ort:"",
      description:""
    },
    {
      id: 2,
      name: "Installateur",
      ort:"",
      description:""
    },
  ];

}
