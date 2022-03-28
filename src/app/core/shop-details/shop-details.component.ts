import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategory, IShopDetail } from 'src/app/shared/models/shopDetails';
import { LoaderService } from 'src/app/shared/services/loader.service';
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

  constructor(
    private activateRoute: ActivatedRoute,
    private shopDetailService: ShopDetailsService,
    private loader: LoaderService

  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.fetchCategories();
    this.fetchDataWithParams();
  }

  fetchCategories() {
    this.shopDetailService.getAvailableCategory().subscribe((response: any) => {
      this.availableCatergory = response.data;
    });
  }

  fetchDataWithParams() {

    this.activateRoute.params.subscribe((queryParamsResponse: any) => {
      this.loader.show()
      if (queryParamsResponse.id) {
        this.shopDetailService
          .getShopDataWithId(queryParamsResponse.id)
          .subscribe(
            (response: any) => {
             this.loader.hide();
            this.allShopData = response.data;
            this.availableCatergory = this.availableCatergory.filter(
              (availCat: any) =>
                this.allShopData.filter(
                  (shopData: any) => availCat._id === shopData.categoryName
                )[0]
            );
            this.handleCategoryClick(response.data[0].categoryName, 0);
          },
          (error)=>{
               this.loader.hide();
               console.log('Error while getting data with params')
          }
          );

      }
    });
  }

  handleCategoryClick(id: string, i: number) {
    this.shopDataWithCategory = this.allShopData.filter((data: any) => {
      if (data.categoryName === id) {
        data.populateCategoryName = this.availableCatergory[i].category;
        return data;
      }
    });
  }
}
