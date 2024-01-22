import { Component } from '@angular/core';
import { Swiper } from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

@Component({
    selector: 'app-partner-overview',
    templateUrl: './partner-overview.component.html',
    styleUrls: ['./partner-overview.component.css']
})
export class PartnerOverviewComponent {
    ngOnInit() {
        this.createSlider();
    }

    //Erstellt Slider
    createSlider() {
        var PartnerSlider = new Swiper('.partner-slider', {
            modules: [Pagination, Autoplay],
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
        });
    }
}
