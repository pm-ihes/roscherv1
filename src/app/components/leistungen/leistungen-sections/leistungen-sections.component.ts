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
      text_box: "Sie möchten sich unabhängig vom Strom- und Wärmenetz machen und dabei kurz- als auch langfristig Kosten sparen? Wir erstellen geminsam mit Ihnen ein Konzept, mit welchen Sie finanziell als auch energetisch profitieren werden.",
      gsap_trigger_id: "text_1" 
    },
    {
      id: 2,
      name: "Intelligente Heizsysteme",
      image: "../../../../assets/images/image_heizsystem.jpg",
      image_right: false,
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Sie wollen Ihr Heizgerät austauschen oder spielen mit dem Gedanken den Energieträger zu wechseln? Wir erarbeiten mit Ihnen eine individuelle Lösung, die umsetzbar, geeignet & zuverlässig auf Sie angepasst ist.",
      gsap_trigger_id: "text_2" 
    },
    {
      id: 3,
      name: "Moderne Sanitäranlagen",
      image: "../../../../assets/images/image_sanitaer.jpg",
      image_right: true,
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Armaturen, Badewannen, Duschen oder BD's? Wir bieten Ihnen das Komplett-Paket in der Realisierung Ihrer neuen Wohlfühloase",
      gsap_trigger_id: "text_3" 
    },
    {
      id: 4,
      name: "Klima- & Lüftungsanlagen",
      image: "../../../../assets/images/image_klimaanlage.jpg",
      image_right: false,
      slogan: "Energie ist Zukunft - und Ihre beginnt jetzt!",
      text_box: "Ihnen qualmt der Kopf vor Hitze und die Luft im Raum beginnt unangenehm zu werden? Wir erstellen eine individuelle Lösung.",
      gsap_trigger_id: "text_4" 
    },

  ]

}
