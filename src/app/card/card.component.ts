import { Component, Input, OnInit } from '@angular/core';

interface records {
  rating : Array<number>,
  feedback : Array<string>,
  _id : string,
  shopName : string,
  shopContactNumber: string,
    openTime: string,
    closeTime: string,
    address: string,
    state: string,
    city: string,
    postalCode: string,
    landmark: string,
    discountPer: number,
    ownerName: string,
    ownerEmail: string,
    registeredDate: string,
    status: boolean,

}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() data : any ;

  
 dummyData : records = {
    rating: [],
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
