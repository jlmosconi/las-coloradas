import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHeaderComponent } from "./products-header.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ProductsHeaderComponent ],
    exports: [ ProductsHeaderComponent ]
})
export class ProductsHeaderModule {}