import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  @Input() cartProduct!: number
  @Input() price!: number;
  @Input() discount!:number;
  @Input() sellingPrice!:number;
  @Input() delieveryCharges!:number;
  @Input() total!:number;
  

  constructor() { }

  ngOnInit(): void {
  }

}
