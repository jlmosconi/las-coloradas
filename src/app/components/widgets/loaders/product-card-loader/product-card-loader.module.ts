import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardLoaderComponent } from './product-card-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductCardLoaderComponent],
  exports: [ProductCardLoaderComponent]
})
export class ProductCardLoaderModule { }
