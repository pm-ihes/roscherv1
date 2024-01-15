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
      name: "Kundendienstmonteur/ -techniker für Heizungs-, Lüftungs- und Sanitärtechnik (m/w/d)",
      ort:"",
      description:""
    },
    {
      id: 2,
      name: "Anlagenmechaniker für Heizungs-, Lüftungs- und Sanitärtechnik (m/w/d)",
      ort:"",
      description:""
    },
  ];

}
