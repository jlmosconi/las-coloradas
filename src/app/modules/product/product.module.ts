import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { routing } from './product.routes';
import { ProductDetailModule } from "../../components/products/product-detail/product-detail.module";
import { ModuleLoaderModule } from "../../components/widgets/loaders/module-loader/module.loader.module";
import { NoResultsFoundModule } from "../../components/widgets/no-results-found/no-results-found.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    ProductDetailModule,
    ModuleLoaderModule,
    NoResultsFoundModule
  ],
  declarations: [ ProductComponent ],
  exports: [ ProductComponent ]
})
export class ProductModule { }
