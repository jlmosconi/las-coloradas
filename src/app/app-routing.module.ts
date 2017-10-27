import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
  { path: 'producto', loadChildren: 'app/modules/product/product.module#ProductModule' },
  { path: 'sobre-nosotros', loadChildren: 'app/modules/about-us/about-us.module#AboutUsModule' },
  { path: 'contacto', loadChildren: 'app/modules/contact-us/contact-us.module#ContactUsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
