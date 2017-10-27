import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsContainerComponent } from './contact-us.component';

const routes: Routes = [
  { path: '', component: ContactUsContainerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);