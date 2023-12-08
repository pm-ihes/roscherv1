import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  cardElements?: ElementRef[];
  thamElements?: ElementRef[];

  viewLoaded: boolean = false;
  menuOpened: boolean = false;

  cards = [
    {
      image: 'assets/images/image_team.jpg',
      text: ''
    },
    {
      image: 'assets/images/image_team.jpg',
      text: ''
    },
    {
      image: 'assets/images/image_team.jpg',
      text: ''
    },
    {
      image: 'assets/images/image_team.jpg',
      text: ''
    },
    {
      image: 'assets/images/image_team.jpg',
      text: ''
    }
  ];

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngAfterViewInit() {

    Aos.refresh();

    this.cardElements = this.elem.nativeElement.querySelectorAll('.card');
    this.thamElements = this.elem.nativeElement.querySelectorAll('.tham');


    if (this.cardElements) {
      this.cardElements.forEach(card => {
        this.renderer.removeClass(card, 'active');
      })

      this.renderer.addClass(this.cardElements[0], 'active');
    }


  }

  addActive(event: Event) {
    const target = event.target as HTMLElement;

    this.menuOpened = false;

    if (this.cardElements && target) {
      this.cardElements.forEach(card => {
        this.renderer.removeClass(card, 'active');
      })

      this.renderer.addClass(target, 'active');
    }

    if (this.thamElements) {
      this.thamElements.forEach(tham => {
        this.renderer.removeClass(tham, 'tham-active');
      })
    }
  }

  toggleMenu(event: Event) {
    const tham = event.currentTarget as HTMLElement;

    this.menuOpened = !this.menuOpened;

    tham.classList.toggle('tham-active');
  }

}
