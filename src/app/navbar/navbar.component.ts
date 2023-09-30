import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  menuToggled = true;

  constructor(private router: Router) {}

  ngOnInit () {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(!this.menuToggled){
          this.menuOpenToggle();
        }

      }
    });
  }

  menuOpenToggle() {
    this.menuToggled = !this.menuToggled;
    document.querySelector('#menu')?.classList.toggle('open');
  }

}
