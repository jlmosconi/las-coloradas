import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartContainerComponent } from './cart.component';

const routes: Routes = [
  { path: '', component: CartContainerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);