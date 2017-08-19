import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContainerComponent } from './landing.component';

const routes: Routes = [
  { path : '', component: LandingContainerComponent },
  { path: 'landing', redirectTo: '/', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
