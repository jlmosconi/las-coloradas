import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
  { path: 'producto', loadChildren: 'app/modules/product/product.module#ProductModule' },
  { path: 'checkout', loadChildren: 'app/modules/checkout/checkout.module#CheckoutModule' },
  { path: 'sobre-nosotros', loadChildren: 'app/modules/about-us/about-us.module#AboutUsModule' },
  { path: 'contacto', loadChildren: 'app/modules/contact-us/contact-us.module#ContactUsModule' },
  { path: 'busqueda', loadChildren: 'app/modules/search/search.module#SearchContainerModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
