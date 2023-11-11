import { Component } from '@angular/core';

@Component({
  selector: 'app-leistungen-top',
  templateUrl: './leistungen-top.component.html',
  styleUrls: ['./leistungen-top.component.css']
})
export class LeistungenTopComponent {



  leistungen: any[] = [
    {
      name: "Erneuerbare Energien",
      iconPath: "../../../../assets/icons/icon-leistungen-eEnergien.svg"
    },
    {
      name: "intelligente Heizsystem",
      iconPath: "../../../../assets/icons/icon-leistungen-heizsysteme.svg"
    },
    {
      name: "moderne Sanitäranlagen",
      iconPath: "../../../../assets/icons/icon-leistungen-sanitaer.svg"
    },
    {
      name: "Klima- & Lüftungsanlagen",
      iconPath: "../../../../assets/icons/icon-leistungen-klima.svg"
    }
  ];

}
