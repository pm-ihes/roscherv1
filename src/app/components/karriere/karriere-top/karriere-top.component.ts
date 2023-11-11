import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-karriere-top',
  templateUrl: './karriere-top.component.html',
  styleUrls: ['./karriere-top.component.css']
})
export class KarriereTopComponent {

  @ViewChild('.heading_karriere') 
  heading?: ElementRef;

  ngOnInit(): void {
    
    this.initGsap();

  }

  initGsap(){

    gsap.registerPlugin(ScrollTrigger);

    //ScrollTrigger: Heading MainPage
    let tl_heading = gsap.timeline({scrollTrigger: {
      trigger: '.heading_karriere',
      start: `top +=${this.getOffsetTop}px`,
      end: 'bottom top',
      scrub: 1,
      markers: true,
    }});

    tl_heading.to('.heading_karriere', {
      translateY: '-40%'
    });

  }

  getOffsetTop(){
    return this.heading?.nativeElement.getBoudingClientRect().top;
  }

}
