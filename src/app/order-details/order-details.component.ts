import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Orderid: number;
  customer: string;
  orderitem: string;
  OrderDate: string;
  Amount: number;
  Status: string;
  Payment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'pending',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'In Progress',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'Cancelled',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'Delievered',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'pending',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'Delievered',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'pending',
    Payment: 'UPI',
  },
  {
    Orderid: 194394737797,
    customer: 'Leanne Graham',
    orderitem: 'Bret',
    OrderDate: 'Sincere@april.biz',
    Amount: 299,
    Status: 'Cancelled',
    Payment: 'UPI',
  },
];

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'Orderid',
    'customer',
    'Orderitem',
    'OrderDate',
    'Amount',
    'Status',
    'Payment',
    'actions',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  getItemStatus(status: any) {
    let temp: any[] = [];
    ELEMENT_DATA.filter((data: any) => {
      if (status == data.Status) {
        temp.push(data);
      }
    });
    if (temp.length) {
      this.dataSource = temp;
    } else {
      this.dataSource = ELEMENT_DATA;
    }
  }
}
