import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-welcome-slider-vorteile',
  templateUrl: './welcome-slider-vorteile.component.html',
  styleUrls: ['./welcome-slider-vorteile.component.css']
})
export class WelcomeSliderVorteileComponent implements OnInit{

  ngOnInit(){

    this.createSlider();

    this.initGsap();
    
  }

  //Erstellt Slider
  createSlider() {
    var BenefitSlider = new Swiper('.benefit-slider', {
      modules: [Navigation, Pagination, EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }


  initGsap() {
    gsap.registerPlugin(ScrollTrigger);

    var tl_benefit_heading = gsap.timeline({scrollTrigger: {
      trigger: '#benefit',
      start: 'top 90%',
      end: 'top 60%',
      scrub: 1
    }});

    tl_benefit_heading.from('.heading_benefit', {
      yPercent: '-100',
      opacity: 0
    });
  }

}
