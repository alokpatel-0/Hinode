import { Component, Input, OnInit } from '@angular/core';
import { dummyData } from './cardData';

interface records {
  rating: Array<number>;
  feedback: Array<string>;
  _id: string;
  shopName: string;
  shopContactNumber: string;
  openTime: string;
  closeTime: string;
  address: string;
  state: string;
  city: string;
  postalCode: string;
  landmark: string;
  discountPer: number;
  ownerName: string;
  ownerEmail: string;
  registeredDate: string;
  status: boolean;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data!: records;

  dummyData: records = dummyData;

  constructor() {}

  ngOnInit(): void {}
}
