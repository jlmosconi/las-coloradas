import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { MatButtonModule } from "@angular/material";
import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
