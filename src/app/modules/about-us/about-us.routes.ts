import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsContainerComponent } from './about-us.component';

const routes: Routes = [
  { path: '', component: AboutUsContainerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);