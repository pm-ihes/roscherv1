import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-welcome-top',
  templateUrl: './welcome-top.component.html',
  styleUrls: ['./welcome-top.component.css']
})
export class WelcomeTopComponent implements OnInit{

  ngOnInit(): void {
    
    this.initGsap();

  }

  initGsap(){

    gsap.registerPlugin(ScrollTrigger);

    //ScrollTrigger: Heading MainPage
    let tl_heading = gsap.timeline({scrollTrigger: {
      trigger: '.heading_welcome',
      start: 'top 70%',
      end: 'bottom top',
      scrub: 1,
      markers: true,
    }});

    tl_heading.to('.heading_welcome', {
      translateY: '-200%'
    });

  }

}
