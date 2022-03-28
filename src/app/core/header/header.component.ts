import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CardscreenComponent } from 'src/app/cardscreen/cardscreen.component';
import { CardScreenService } from 'src/app/shared/services/card-screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideNavbar: boolean = false;
  @Input() cartProduct!: number;
  dummyCart: any;
  dummyCartLength: any;
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

  constructor(
    public auth: AuthService,
    private cartService: CardScreenService
  ) {}

  ngOnInit(): void {
    this.getCartData();
  }
  handleLogout() {
    this.auth.logOut();
  }

  getCartData() {
    const userid = JSON.parse(localStorage.getItem('user')!);

    this.cartService.getCartData(userid?.user?._id).subscribe((dataa: any) => {
      this.dummyCart = dataa.data;
      this.dummyCartLength = this.dummyCart.length;
     
    });

  }
}

