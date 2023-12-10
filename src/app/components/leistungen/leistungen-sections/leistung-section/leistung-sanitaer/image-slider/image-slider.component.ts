import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  cardElements?: ElementRef[];
  thamElements?: ElementRef[];
  mobileElements?: ElementRef[];

  viewLoaded: boolean = false;
  menuOpened: boolean = false;
  mMenuOpened: boolean[] = [false, false, false, false, false];
  isMobile: boolean = false;

  cards = [
    {
      image: 'assets/images/image_waschplatz.jpg',
      text: '',
      notes: ['Armaturen','Waschbecken', 'Waschtisch']
    },
    {
      image: 'assets/images/image_dusche.jpg',
      text: '',
      notes: ['Duschen','Offene Duschen', 'Duschwannen']
    },
    {
      image: 'assets/images/image_wc.jpg',
      text: '',
      notes: ['WCs','Urinale', 'Bidets', 'Dusch-WCs']
    },
    {
      image: 'assets/images/image_badewanne.jpg',
      text: '',
      notes: ['Freistehende Badewanne','Eckbadewanne', 'Whirlpool']
    },
    {
      image: 'assets/images/image_zubehoer.jpg',
      text: '',
      notes: ['Installationselemente','Halterungen']
    }
  ];

  constructor(private renderer: Renderer2, private elem: ElementRef) { }


  ngOnInit() {
    this.isMobile = this.getSize();
  }


  ngAfterViewInit() {

    Aos.refresh();

    this.refreshElements();

    if (this.cardElements) {
      this.cardElements.forEach((card) => {
        this.renderer.removeClass(card, 'active');
      })

      if (!this.isMobile){
        this.renderer.addClass(this.cardElements[0], 'active');
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = this.getSize();
    this.refreshElements();
  }


  refreshElements(){
    this.cardElements = this.elem.nativeElement.querySelectorAll('.card');
    this.thamElements = this.elem.nativeElement.querySelectorAll('.tham');
    this.mobileElements = this.elem.nativeElement.querySelectorAll('.mobile-notes');
  }


  addActive(event: Event) {
    const target = event.target as HTMLElement;

    this.menuOpened = false;

    if (this.cardElements && target) {
      this.cardElements.forEach((card) => {
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


  toggleMenu(event: Event, index: number = -1) {
    const tham = event.currentTarget as HTMLElement;

    console.log(index);

    this.menuOpened = !this.menuOpened;

    tham.classList.toggle('tham-active');

    if (this.isMobile && this.mobileElements) {
      this.mMenuOpened[index] = !this.mMenuOpened[index];

      var mobileEl = this.mobileElements[index];
      console.log(mobileEl);

      for (let i = 0; i < 5; i++) {
        if (!this.mMenuOpened[i]) {
          this.renderer.removeClass(this.mobileElements[i], 'active');
        }
      }

      if (this.mMenuOpened[index]){
        this.renderer.addClass(this.mobileElements[index], 'active');
      }
    }
  }


  getSize() {
    if (window.innerWidth < 1001) {
      return true;
    } else {
      return false;
    }
  }

}
