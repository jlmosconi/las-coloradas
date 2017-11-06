import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from "@angular/material";
import { ShoppingCartIconComponent } from "./shopping-cart-icon.component";

@NgModule({
    imports: [ 
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [ ShoppingCartIconComponent ],
    exports: [ ShoppingCartIconComponent ]
})
export class ShoppingCartIconModule {}