import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductDetailComponent],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }
