import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from "./checkout.component";
import { CartContainerComponent } from "./cart/cart.component";
import { ShippingContainerComponent } from "./shipping/shipping.component";

const routes: Routes = [
    { path : '', component: CheckoutComponent,
      children: [
        { path: '', redirectTo: 'cart', pathMatch: 'full' },
        { path: 'carrito', component: CartContainerComponent, data: { step: 'cart' } },
        { path: 'envio', component: ShippingContainerComponent, data: { step: 'shipping' } }
      ]
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);