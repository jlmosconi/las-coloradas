import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from "./checkout.component";
import { CartContainerComponent } from "./cart/cart.component";
import { ShippingContainerComponent } from "./shipping/shipping.component";
import { PayContainerComponent } from "./pay/pay.component";
import { ConfirmContainerComponent } from "./confirm/confirm.component";

const routes: Routes = [
    { path : '', component: CheckoutComponent,
      children: [
        { path: '', redirectTo: 'cart', pathMatch: 'full' },
        { path: 'carrito', component: CartContainerComponent, data: { step: 'cart' } },
        { path: 'envio', component: ShippingContainerComponent, data: { step: 'shipping' } },
        { path: 'pago', component: PayContainerComponent, data: { step: 'pay' } },
        { path: 'confirmar', component: ConfirmContainerComponent, data: { step: 'confirm' } },
      ]
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);