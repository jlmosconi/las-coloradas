import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from "@angular/material";
import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule
  ],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
