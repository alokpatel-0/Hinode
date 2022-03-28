import { Component, OnInit } from '@angular/core';
import { CardScreenService } from 'src/app/shared/services/card-screen.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  cardsData!: any;
  shopId!: any;

  constructor(private cartService: CardScreenService) {}

  ngOnInit(): void {
    this.showCard();
  }

  showCard() {
    this.cartService.viewCardOnLandingPage().subscribe((data: any) => {
     

      this.cardsData = data?.data;
      this.cardsData.map((data:any) => {
            this.shopId = data._id
            console.log(this.shopId)
      })
    });
  }

  
  
}
