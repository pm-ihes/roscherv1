import { trigger } from '@angular/animations';
import { Component, Input, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-leistung-section',
  templateUrl: './leistung-section.component.html',
  styleUrls: ['./leistung-section.component.css']
})
export class LeistungSectionComponent {

  @Input()
  leistung: any;

  ngAfterViewInit(){
    this.initGsap();
  }

  initGsap(){
    gsap.registerPlugin(ScrollTrigger);

    var mm = gsap.matchMedia()

    
    //Normal-Viewport
    mm.add("(min-width: 701px)", () => {
      let tl_text = gsap.timeline({scrollTrigger: {
        trigger: `#${this.leistung.gsap_trigger_id}`,
        start: `top 40%`,
        end: 'bottom top',
        scrub: 1,
      }});

      tl_text.to(`#${this.leistung.gsap_trigger_id}`, {
        translateY: '100px'
      });
    });

    //Handy-Viewport
    mm.add("(max-width: 700px)", () => {
      gsap.from(`#${this.leistung.gsap_trigger_id}`, {
        scrollTrigger: `#${this.leistung.gsap_trigger_id}`,
        translateX: '-20px',
        duration: 1
      });
    });

  }

}
