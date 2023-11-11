import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-leistungen-top',
  templateUrl: './leistungen-top.component.html',
  styleUrls: ['./leistungen-top.component.css']
})
export class LeistungenTopComponent {

  @ViewChild('.heading_karriere') 
  heading?: ElementRef;

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

  ngOnInit(){

    this.initGsap();
  }

  initGsap(){

    gsap.registerPlugin(ScrollTrigger);

    //ScrollTrigger: Heading MainPage
    let tl_heading = gsap.timeline({scrollTrigger: {
      trigger: '.heading_leistungen',
      start: `top +=${this.getOffsetTop}px`,
      end: 'bottom top',
      scrub: 1,
      markers: true,
    }});

    tl_heading.to('.heading_leistungen', {
      translateY: '-40%'
    });

  }

  getOffsetTop(){
    return this.heading?.nativeElement.getBoudingClientRect().top;
  }

}
