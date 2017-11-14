import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridComponent } from "./products-grid.component";
import { ProductCardModule } from "../../widgets/product-card/product-card.module";
import { ProductCardLoaderModule } from "../../widgets/loaders/product-card-loader/product-card-loader.module";
import { InfiniteScrollLoaderModule } from "../../widgets/loaders/infinite-scroll-loader/infinite-scroll-loader.module";
import { ProductsHeaderModule } from "../../widgets/products-header/products-header.module";
import { NoResultsFoundModule } from "../../widgets/no-results-found/no-results-found.module";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [ 
        CommonModule,
        ProductCardModule,
        ProductCardLoaderModule,
        InfiniteScrollLoaderModule,
        ProductsHeaderModule,
        NoResultsFoundModule,
        InfiniteScrollModule
    ],
    declarations: [ ProductsGridComponent ],
    exports: [ ProductsGridComponent ]
})
export class ProductsGridModule {}