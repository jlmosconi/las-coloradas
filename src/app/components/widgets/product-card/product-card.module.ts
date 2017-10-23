import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { MatButtonModule } from "@angular/material";
import { ProductCardComponent } from './product-card.component';
import { FaboriteButtonModule } from "../favorite-button/favorite-button.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    FaboriteButtonModule
  ],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
