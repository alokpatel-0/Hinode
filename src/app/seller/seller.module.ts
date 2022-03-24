import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from '../material.module';
import { ProductItemCardComponent } from './product-item-card/product-item-card.component';

@NgModule({
  declarations: [ProductComponent, ProductItemCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProductComponent],
})
export class SellerModule {}
