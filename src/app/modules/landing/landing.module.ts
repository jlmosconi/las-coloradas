import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing.component';
import { routing } from './landing.routes';
import { ProductCarouselModule } from "../../components/products/product-carousel/product-carousel.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    ProductCarouselModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [
    LandingContainerComponent
  ]
})
export class LandingModule { }
