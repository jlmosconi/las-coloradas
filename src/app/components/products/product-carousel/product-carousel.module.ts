import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from './product-carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ProductCardModule } from "../../widgets/product-card/product-card.module";
import { ProductCardLoaderModule } from "../../widgets/loaders/product-card-loader/product-card-loader.module";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ProductCardModule,
    ProductCardLoaderModule
  ],
  declarations: [ ProductCarouselComponent ],
  exports: [ ProductCarouselComponent ]
})
export class ProductCarouselModule { }
