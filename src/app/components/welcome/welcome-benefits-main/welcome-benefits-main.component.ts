import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

@Component({
  selector: 'app-welcome-benefits-main',
  templateUrl: './welcome-benefits-main.component.html',
  styleUrls: ['./welcome-benefits-main.component.css']
})
export class WelcomeBenefitsMainComponent implements OnInit{

  ngOnInit(){

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

}
