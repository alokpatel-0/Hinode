import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideNavbar: boolean = false;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    if (window.scrollY > document.getElementById('landingNavbar')!?.offsetTop)
      this.hideNavbar = true;
    else {
      this.hideNavbar = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
