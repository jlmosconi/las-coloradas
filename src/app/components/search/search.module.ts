import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search.component";
import { ProductsGridModule } from "../products/products-grid/products-grid.module";

@NgModule({
    imports: [ 
        CommonModule,
        ProductsGridModule
    ],
    declarations: [ SearchComponent ],
    exports: [ SearchComponent ]
})
export class SearchModule {}