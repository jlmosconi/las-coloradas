import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material'
import { CartComponent } from "./cart.component";

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
    declarations: [ CartComponent ],
    exports: [ CartComponent ]
})
export class CartModule {}