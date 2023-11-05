import { Component } from '@angular/core';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-karriere-top',
  templateUrl: './karriere-top.component.html',
  styleUrls: ['./karriere-top.component.css']
})
export class KarriereTopComponent {

  ngOnInit(): void {
    
    this.initGsap();

  }

  initGsap(){

    gsap.registerPlugin(ScrollTrigger);

    //ScrollTrigger: Heading MainPage
    let tl_heading = gsap.timeline({scrollTrigger: {
      trigger: '.heading_karriere',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      markers: true,
    }});

    tl_heading.to('.heading_karriere', {
      translateY: '-40%'
    });

  }

}
