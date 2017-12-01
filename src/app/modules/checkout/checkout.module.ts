import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./checkout.routes";
import { RouterModule }   from '@angular/router';
import { MatButtonModule } from '@angular/material'
import { CheckoutComponent } from './checkout.component';
import { CartContainerModule } from "./cart/cart.module";
import { ShippingContainerModule } from "./shipping/shipping.module";
import { PayContainerModule } from "./pay/pay.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    MatButtonModule,
    CartContainerModule,
    ShippingContainerModule,
    PayContainerModule
  ],
  exports: [
    CheckoutComponent
  ],
  declarations: [
    CheckoutComponent
  ]
})

export class CheckoutModule { }