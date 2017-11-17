import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { AddToCartModule } from "../../widgets/add-to-cart/add-to-cart.module";
import { FaboriteButtonModule } from "../../widgets/favorite-button/favorite-button.module";
import { ProductCarouselModule } from "../../../components/products/product-carousel/product-carousel.module";
import { AlertModule } from "../../widgets/alert/alert.module";

@NgModule({
  imports: [
    CommonModule,
    AddToCartModule,
    FaboriteButtonModule,
    ProductCarouselModule,
    AlertModule
  ],
  declarations: [ProductDetailComponent],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }
