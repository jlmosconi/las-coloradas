import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { routing } from './product.routes';
import { ProductDetailModule } from "../../components/products/product-detail/product-detail.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    ProductDetailModule
  ],
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
