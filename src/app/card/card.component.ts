import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data : any 
  
  dummyData : any = {
    rating: [1],
    feedback: [],
    _id: '607537ac0f87c626c9b3641c',
    shopName: 'Shop 1',
    shopContactNumber: '7905845567',
    openTime: '9:00 AM',
    closeTime: '9:00 PM',
    address: '126, hisar haryana',
    state: 'Haryana',
    city: 'Hisar',
    postalCode: '125005',
    landmark: 'near sun city mall',
    discountPer: 0,
    ownerName: 'test seller 1',
    ownerEmail: 'seller1@gmail.com',
    registeredDate: '2021-04-13T06:18:20.397Z',
    status: true,
  };

  constructor() {}

  
  ngOnInit(): void {}
}
