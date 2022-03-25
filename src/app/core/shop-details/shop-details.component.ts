import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';

import {
  ICategory,
  IShopDetail,
  IQuantity,
} from 'src/app/shared/models/shopDetails';
import { ShopDetailsService } from 'src/app/shared/services/shop-details.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss'],
})
export class ShopDetailsComponent implements OnInit {
  allShopData!: Array<IShopDetail>;
  availableCatergory!: Array<ICategory>;
  shopDataWithCategory!: Array<IShopDetail>;
  counter = 0;
  cartItems!: Array<IQuantity>;
  shopId!: number;
  @ViewChild('sidenav', { static: true }) public sidenav!: MatSidenav;
  constructor(
    private activateRoute: ActivatedRoute,
    private shopDetailService: ShopDetailsService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchDataWithParams();
  }

  fetchCategories() {
    this.shopDetailService.getAvailableCategory().subscribe((response: any) => {
      this.availableCatergory = response.data;
      console.log(this.availableCatergory);
    });
  }

  fetchDataWithParams() {
    this.activateRoute.params.subscribe((queryParamsResponse: any) => {
      if (queryParamsResponse.id) {
        this.shopDetailService
          .getShopDataWithId(queryParamsResponse.id)
          .subscribe((response: any) => {
            this.allShopData = response.data;
            this.availableCatergory = this.availableCatergory.filter(
              (availCat: any) =>
                this.allShopData.filter(
                  (shopData: any) => availCat._id === shopData.categoryName
                )[0]
            );
            this.handleCategoryClick(response.data[0].categoryName, 0);
          });
      }
    });
  }

  handleAdd(data: IShopDetail) {
    this.cartItems = data.quantitySet;
    this.cartItems = this.cartItems.map(
      (cartItem: IQuantity, index: number) => {
        cartItem.productPriceWithDiscount =
          cartItem.productprice -
          (cartItem.productprice / 100) * cartItem.discount;
        if (index === 0) {
          cartItem.categoryName = data.populateCategoryName;
        }
        return cartItem;
      }
    );
    console.log(data);
  }

  handleCategoryClick(id: string, i: number) {
    this.shopDataWithCategory = this.allShopData.filter((data: any) => {
      if (data.categoryName === id) {
        data.populateCategoryName = this.availableCatergory[i].category;
        return data;
      }
    });
  }
  addToCart(item: any, index: number) {
    console.log(item, index, this.cartItems);
    const data = {
      userId: '6238615aca2a920016e16877',
      itemId: item._id,
      shopId: this.shopId,
      action: 'new',
    };
    this.shopDetailService.addToCart(data).subscribe((response: any) => {
      console.log('item add to cart successfully ', response);
    });
  }
  removeFromCart(item: any, index: number) {
    console.log(item, index, this.cartItems);
    this.shopDetailService.removeFromCart({}).subscribe((response: any) => {
      console.log('item remove from card successfully', response);
    });
  }
}
