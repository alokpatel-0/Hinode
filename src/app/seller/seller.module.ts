import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from '../material.module';
import { ProductItemCardComponent } from './product-item-card/product-item-card.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductItemCardComponent,
    AddProductFormComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ProductComponent, AddProductFormComponent],
})
export class SellerModule {}
