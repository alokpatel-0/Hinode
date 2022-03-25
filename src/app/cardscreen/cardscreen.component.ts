import { Component, OnInit } from '@angular/core';
import { CardScreenService } from '../shared/services/card-screen.service';
import { RootObject } from './cartscreen';
import { environment } from './../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-cardscreen',
  templateUrl: './cardscreen.component.html',
  styleUrls: ['./cardscreen.component.scss'],
})
export class CardscreenComponent implements OnInit {
  price: number = 0;
  delieveryCharges = 1;
  discount!: number;
  value: any;
  sellingPrice!: number;
  total!: number;
  cartProduct!: number;
  totalDiscountValue = 0;
  dummyCart!: RootObject[];
  data!: any;
  showButton = true;
  devUrl = environment.devUrl;
  discountvalue!: number;
  orderquantity!: number;
  finalValue : number = 0
  finalSellingPrice : number = 0
  finalDisountedValue : number = 0

  constructor(
    private cartService: CardScreenService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private loader: LoaderService
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
    });

    dialogRef.afterClosed().subscribe((result) => {
     

      if (result == 'yes') {
        this.removeCartData(data);
      } 
    });
  }
  getCartDetails() {
    this.loader.show();
    const userid = JSON.parse(localStorage.getItem('user')!);
    
    this.cartService.getCartData(userid?.user?._id).subscribe((dataa: any) => {
     this.loader.hide();
      this.dummyCart = dataa.data;
      this.data = dataa;

     
      this.calculatePercentage();
    });
  }

  removeCartData(data: any) {
 
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
      window.location.reload();
    });
  }

  incrementCart(data: any) {
    
    const userid = JSON.parse(localStorage.getItem('user')!);
    const payload = {
      action: 'add',
      itemId: data?.l.q._id,
      shopId: this.data.shop._id,
      userid: userid.user._id,
    };

    this.cartService.incrementCartData(payload).subscribe((daa) => {
      

      const itemId = data?.l.id;
      this.getCartDetails();
      window.location.reload()
    });
  }

  decrementCart(data: any) {
    const userid = JSON.parse(localStorage.getItem('user')!);
    const payload = {
      action: 'sub',
      itemId: data?.l.q._id,
      shopId: this.data.shop._id,
      userid: userid.user._id,
    };

    this.cartService.decrementCartData(payload).subscribe((daa) => {
      const itemId = data?.l.id;
      this.getCartDetails();
      window.location.reload()
    });
  }

  calculatePercentage() {
   

 

    this.dummyCart?.map((discount: any) => {
      
      this.price = discount.l.q.productprice
    

      this.orderquantity = discount.l.orderQuantity;

      

      this.price = this.price * this.orderquantity;
      this.finalValue = this.finalValue + this.price
     

      const discountPercentage = discount.l.q.discount;

      const productPrice = discount.l.q.productprice;

      const discountedpercentValue = (discountPercentage * productPrice) / 100;
     

      this.sellingPrice = (productPrice * this.orderquantity) - (discountedpercentValue * this.orderquantity);
      

      this.finalSellingPrice = this.sellingPrice +this.finalSellingPrice

      
      

       discount['price'] = productPrice -discountedpercentValue;
      

     
       this.cartProduct = this.dummyCart.length;
     
    });

   
    this.discountvalue = this.finalValue - this.finalSellingPrice;
    this.total = this.finalSellingPrice + this.delieveryCharges;

    
  }
}
