import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideNavbar: boolean = false;

  @HostListener('window:scroll')
  scrollHandler() {
    const svgBg = document.getElementById('svgBg');
    const landingNavbar = document.getElementById('landingNavbar');

    //setting landing navbar to its default position
    if (window.scrollY < svgBg!?.offsetHeight + landingNavbar!?.offsetHeight) {
      landingNavbar?.classList.remove('fixed-top');
      this.hideNavbar = false;
    }
    // setting header navbar to be overlapped by landing navbar
    else if (window.scrollY > window.screenY + landingNavbar!?.offsetHeight) {
      this.hideNavbar = true;
      landingNavbar?.classList.add('fixed-top');
    }
    // setting header navbar to its default position
    else {
      this.hideNavbar = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
