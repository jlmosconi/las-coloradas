import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatProgressSpinnerModule } from "@angular/material";
import { SearchBarComponent } from "./search-bar.component";
import { ProductSearchCardModule } from "../product-search-card/product-search-card.module";

@NgModule({
    imports: [ 
        CommonModule,
        MatIconModule, 
        MatButtonModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        ProductSearchCardModule
    ],
    declarations: [ SearchBarComponent ],
    exports: [ SearchBarComponent ]
})
export class SearchBarModule {}