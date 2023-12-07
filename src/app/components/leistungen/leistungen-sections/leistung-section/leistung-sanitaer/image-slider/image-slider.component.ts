import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  cardElements?: ElementRef[];

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

    this.cardElements = this.elem.nativeElement.querySelectorAll('.card');

    if (this.cardElements) {
      this.cardElements.forEach(card => {
        this.renderer.removeClass(card, 'active');
      })

      this.renderer.addClass(this.cardElements[0], 'active');
    }


  }

  addActive(event: Event) {
    const target = event.target as HTMLElement;

    if (this.cardElements && target) {
      this.cardElements.forEach(card => {
        this.renderer.removeClass(card, 'active');
      })

      this.renderer.addClass(target, 'active');
    }

  }

}
