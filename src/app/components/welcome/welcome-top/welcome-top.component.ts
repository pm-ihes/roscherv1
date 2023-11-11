import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-welcome-top',
  templateUrl: './welcome-top.component.html',
  styleUrls: ['./welcome-top.component.css']
})
export class WelcomeTopComponent implements OnInit{

  @ViewChild('.heading_welcome')
  heading?: ElementRef;

  ngOnInit(): void {
    this.initGsap();
  }

  initGsap(){

    gsap.registerPlugin(ScrollTrigger);

    //ScrollTrigger: Heading MainPage
    let tl_heading = gsap.timeline({scrollTrigger: {
      trigger: '.heading_welcome',
      start: `top +=${this.getOffsetTop}px`,
      end: 'bottom top',
      scrub: 1,
    }});

    tl_heading.to('.heading_welcome', {
      translateY: '-40%'
    });

  }

  getOffsetTop(){
    return this.heading?.nativeElement.getBoudingClientRect().top;
  }

}
