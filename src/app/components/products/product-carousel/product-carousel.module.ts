import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from './product-carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ProductCardModule } from "../../widgets/product-card/product-card.module";
import { ProductCardLoaderModule } from "../../widgets/loaders/product-card-loader/product-card-loader.module";
import { ProductsHeaderModule } from "../../widgets/products-header/products-header.module";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ProductCardModule,
    ProductCardLoaderModule,
    ProductsHeaderModule
  ],
  declarations: [ ProductCarouselComponent ],
  exports: [ ProductCarouselComponent ]
})
export class ProductCarouselModule { }
