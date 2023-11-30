import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-welcome-leistungen-overview',
  templateUrl: './welcome-leistungen-overview.component.html',
  styleUrls: ['./welcome-leistungen-overview.component.css']
})
export class WelcomeLeistungenOverviewComponent implements OnInit {

  ngOnInit() {

    this.initGsap();

  }

  initGsap() {

    gsap.registerPlugin(ScrollTrigger);

    var mm = gsap.matchMedia();

    mm.add("(min-width: 701px)", () => {

      //Animation Text (links)
      var tl_service_overview_text = gsap.timeline({
        scrollTrigger: {
          trigger: '#loesungen',
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1
        }
      });

      tl_service_overview_text.from('.loesungen_text', {
        x: '-100'
      });

      //Animation Cards (oben)
      var tl_service_overview_cards_top = gsap.timeline({
        scrollTrigger: {
          trigger: '.loesungen_cards_top',
          start: 'top bottom',
          end: 'top 50%',
          scrub: 2
        }
      });

      tl_service_overview_cards_top.from('.loesungen_cards_top', {
        x: '100'
      });

      //Animation Cards (oben)
      var tl_service_overview_cards_bottom = gsap.timeline({
        scrollTrigger: {
          trigger: '.loesungen_cards_bottom',
          start: 'top bottom',
          end: 'top 50%',
          scrub: 2
        }
      });

      tl_service_overview_cards_bottom.from('.loesungen_cards_bottom', {
        x: '100'
      });
    });

  }
}
