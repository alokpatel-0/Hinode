import { Component, OnInit } from '@angular/core';
import { CardScreenService } from '../card-screen.service';

@Component({
  selector: 'app-cardscreen',
  templateUrl: './cardscreen.component.html',
  styleUrls: ['./cardscreen.component.scss'],
})
export class CardscreenComponent implements OnInit {
  cost: number = 33333;
  price: number = 728;
  delievery = 1;
  discount!:number
  value: any;
  res!:number
  sellingPrice!: number
  total!:number
  cartProduct!: number
  discountpercentage!:number

  dummyCart = [
    {
      l: {
        orderQuantity: 0,
        id: '62386f8dca2a920016e1687c',
        q: {
          _id: '60c5a8fa843f7c3a4aad043b',
          productId: '60c5a8ee843f7c3a4aad043a',
          availablein: '500 gm',
          productprice: 222,
          inStockNumber: 22,
          discount: 20,
        },
      },
      parentId: '60c5a8ee843f7c3a4aad043a',
      productName: 'TEST NAME 1',
      imageUrl: [
        '/public/images/1623566596737-Screenshot from 2021-05-26 12-00-46.png',
        '/public/images/1623566596739-Screenshot from 2021-05-07 14-53-14.png',
      ],
    },
    {
      l: {
        orderQuantity: 0,
        id: '62386f8dc34a2a920016e1687c',
        q: {
          _id: '60c5a8fa843f7c3a4aad043b',
          productId: '60c5a8ee843f7c3a4aad043a',
          availablein: '1 kg',
          productprice: 584,
          inStockNumber: 22,
          discount: 40
        },
      },
      parentId: '60c5a8ee843f7c3a4aad043a',
      productName: 'TEST NAME 2',
      imageUrl: [
        '/public/images/1623566596737-Screenshot from 2021-05-26 12-00-46.png',
        '/public/images/1623566596739-Screenshot from 2021-05-07 14-53-14.png',
      ],
    },
  ];
  constructor( private cartService : CardScreenService) {}

  ngOnInit(): void {
  this. price = this.dummyCart.map(price => price.l.q.productprice).reduce((acc, price) => price + acc);
  this. discount = this.dummyCart.map(discount => discount.l.q.discount).reduce((acc, discount) => discount + acc);
   this.sellingPrice = this.price - this.discount
  this.total = this.sellingPrice + this.delievery
   this.cartProduct = this.dummyCart.length

  
  }
  increment(ides : any) {
    this.dummyCart.filter((id) => {
      if(ides === id?.l?.id){
          this.value = id.l.orderQuantity++;
            console.log(this.value)
      }
    })
    
  }
  decrement(ides : any) {
    this.dummyCart.filter((id) => {
      if(ides === id?.l?.id){
          this.value = id.l.orderQuantity--;
            console.log(this.value)
      }
    })
  }

  getJsonData(){
    this.cartService.getCartData().subscribe((data) => {
      console.log(data);
    })
  }



}

