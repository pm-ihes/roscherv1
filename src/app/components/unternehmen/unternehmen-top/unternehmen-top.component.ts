import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-unternehmen-top',
    templateUrl: './unternehmen-top.component.html',
    styleUrls: ['./unternehmen-top.component.css']
})
export class UnternehmenTopComponent {
    @ViewChild('.heading_unternehmen')
    heading?: ElementRef;

    ngOnInit(): void {
        this.initGsap();
    }

    initGsap() {
        gsap.registerPlugin(ScrollTrigger);

        //ScrollTrigger: Heading MainPage
        let tl_heading = gsap.timeline({
            scrollTrigger: {
                trigger: '.heading_unternehmen',
                start: `top +=${this.getOffsetTop}px`,
                end: 'bottom top',
                scrub: 1
            }
        });

        tl_heading.to('.heading_unternehmen', {
            translateY: '-40%'
        });
    }

    getOffsetTop() {
        return this.heading?.nativeElement.getBoudingClientRect().top;
    }
}
