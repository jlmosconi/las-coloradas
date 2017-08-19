import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing.component';
import { routing } from './landing.routes';
import { ProductListModule } from "../../components/products/product-list/product-list.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    ProductListModule
  ],
  declarations: [
    LandingContainerComponent
  ],
  exports: [
    LandingContainerComponent
  ]
})
export class LandingModule { }
