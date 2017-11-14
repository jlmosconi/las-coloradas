import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from "./search.component";

const routes: Routes = [
  { path : ':q', component: SearchContainerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);