import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from "@angular/material";
import { AddToCartComponent } from "./add-to-cart.component";

@NgModule({
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule
    ],
    declarations: [ AddToCartComponent ],
    exports: [ AddToCartComponent ]
})
export class AddToCartModule {}