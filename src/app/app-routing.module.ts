import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
  { path: 'producto', loadChildren: 'app/modules/product/product.module#ProductModule' },
  { path: 'carrito', loadChildren: 'app/modules/cart/cart.module#CartContainerModule' },
  { path: 'sobre-nosotros', loadChildren: 'app/modules/about-us/about-us.module#AboutUsModule' },
  { path: 'contacto', loadChildren: 'app/modules/contact-us/contact-us.module#ContactUsModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
