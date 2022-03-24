import { Component, OnInit } from '@angular/core';
import { CardScreenService } from '../shared/services/card-screen.service';
import { RootObject } from './cartscreen';
import { environment } from './../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-cardscreen',
  templateUrl: './cardscreen.component.html',
  styleUrls: ['./cardscreen.component.scss'],
})
export class CardscreenComponent implements OnInit {
  // cost: number = 33333;
  price!: number;
  delieveryCharges = 1;
  discount!: number;
  value: any;
  sellingPrice!: number;
  total!: number;
  cartProduct!: number;
  discountpercentage!: number;
  dummyCart!: RootObject[];
  data!: any;
  showButton = true;
  devUrl = environment.devUrl;

  constructor(
    private cartService: CardScreenService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog // public dialogRef :MatDialogRef<CardscreenComponent>
  ) {}

  ngOnInit(): void {
    this.getCartDetails();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  openDialogBox(data: any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      disableClose: true,
      width: '25vw',
      height: 'auto',
      hasBackdrop: true,
      //   position: fixed ,
      // left: 20%;
      // top: 0%;
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (result == 'yes') {
        this.removeCartData(data);
      } else {
        console.log('no data deleted');
      }
    });
  }
  getCartDetails() {
    const userid = JSON.parse(localStorage.getItem('user')!);
    console.log(userid.user._id);
    this.cartService.getCartData(userid?.user?._id).subscribe((dataa: any) => {
      this.dummyCart = dataa.data;
      this.data = dataa;

      console.log('dummyCard', this.dummyCart);
      console.log('data', this.data);

      this.getAllBillingDetails();
    });
  }

  getAllBillingDetails() {
    this.price = this.dummyCart
      ?.map((price) => price.l.q.productprice)
      .reduce((acc, price) => price + acc);
    this.discount = this.dummyCart
      ?.map((discount) => discount.l.q.discount)
      .reduce((acc, discount) => discount + acc);
    this.sellingPrice = this.price - this.discount;
    this.total = this.sellingPrice + this.delieveryCharges;
    this.cartProduct = this.dummyCart.length;
  }
  removeCartData(data: any) {
    console.log('Data', data);
    const userid = JSON.parse(localStorage.getItem('user')!);

    const payload = {
      action: 'remove',
      itemId: data?.l.id,
      shopId: this.data.shop._id,
      userId: userid.user._id,
    };

    this.cartService.removeCartDataFromJson(payload).subscribe((daa) => {
      this.getCartDetails();
      this.openSnackBar('Delete Data Succesfully', 'ok');
    });
  }

  incrementCart(data: any) {
    console.log('add', data);
    const userid = JSON.parse(localStorage.getItem('user')!);
    const payload = {
      action: 'add',
      itemId: data?.l.q._id,
      shopId: this.data.shop._id,
      userid: userid.user._id,
    };

    this.cartService.incrementCartData(payload).subscribe((daa) => {
      console.log(data);
      const itemId = data?.l.id;
      this.dummyCart.filter((id) => {
        if (itemId == id?.l?.id) {
          this.value = id.l.orderQuantity++;
          console.log(this.value);
        }
      });
    });
  }

  decrementCart(data: any) {
    const userid = JSON.parse(localStorage.getItem('user')!);
    const payload = {
      action: 'remove',
      itemId: data?.l.q._id,
      shopId: this.data.shop._id,
      userid: userid.user._id,
    };

    this.cartService.decrementCartData(payload).subscribe(() => {
      const itemId = data?.l.id;
      this.dummyCart.filter((id) => {
        if (itemId == id?.l?.id) {
          this.value = id.l.orderQuantity--;
          console.log(this.value);
        }
      });
    });
  }
}
