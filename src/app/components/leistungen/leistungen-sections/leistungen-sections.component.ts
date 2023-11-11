import { Component } from '@angular/core';

@Component({
  selector: 'app-leistungen-sections',
  templateUrl: './leistungen-sections.component.html',
  styleUrls: ['./leistungen-sections.component.css']
})
export class LeistungenSectionsComponent {

  leistungen: any[] = [
    {
      id: 1,
      name: "Erneuerbare Energien",
      image: "../../../../assets/images/image_energie.jpg",
      image_right: true, 
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Sie möchten sich unabhängig vom Strom",
    },
    {
      id: 2,
      name: "Intelligente Heizsysteme",
      image: "../../../../assets/images/image_heizsystem.jpg",
      image_right: false, 
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Sie möchten sich unabhängig vom Strom",
    },
    {
      id: 3,
      name: "Moderne Sanitäranlagen",
      image: "../../../../assets/images/image_sanitaer.jpg",
      image_right: true, 
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Sie möchten sich unabhängig vom Strom",
    },
    {
      id: 4,
      name: "Klima- & Lüftungsanlagen",
      image: "../../../../assets/images/image_klimaanlage.jpg",
      image_right: false, 
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Sie möchten sich unabhängig vom Strom",
    },

  ]

}
