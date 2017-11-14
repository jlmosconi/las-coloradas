import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductSearchCardComponent } from "./product-search-card.component";

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule
    ],
    declarations: [ ProductSearchCardComponent ],
    exports: [ ProductSearchCardComponent ],
})
export class ProductSearchCardModule {}