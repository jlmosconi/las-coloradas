import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing.component';
import { routing } from './landing.routes';
import { MatIconModule } from '@angular/material';
import { ProductCarouselModule } from "../../components/products/product-carousel/product-carousel.module";
import { BrandsListModule } from "../../components/widgets/brands-list/brands-list.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatIconModule,
    ProductCarouselModule,
    BrandsListModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [
    LandingContainerComponent
  ]
})
export class LandingModule { }
