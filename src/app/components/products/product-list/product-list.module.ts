import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ProductCardModule } from "../../widgets/product-card/product-card.module";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ProductCardModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductListModule { }
