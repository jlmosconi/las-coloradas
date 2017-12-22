import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatInputModule,
    MatSelectModule
    } from '@angular/material';
import { PaymentComponent } from "./payment.component";

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [ PaymentComponent ],
    exports: [ PaymentComponent ],
})
export class PaymentModule {}