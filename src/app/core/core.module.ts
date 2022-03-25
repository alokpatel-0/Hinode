import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import { CardComponent } from '../card/card.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    LandingComponent,
    CheckoutComponent,
    AddressFormComponent,
    CardComponent,
    ShopDetailsComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    LoaderComponent,
    LandingComponent,
    CheckoutComponent,
    AddressFormComponent,
    CardComponent,
  ],
})
export class CoreModule {}
