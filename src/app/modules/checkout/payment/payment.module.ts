import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayContainerComponent } from "./payment.component";
import { PaymentModule } from "../../../components/checkout/payment/payment.module";
import { ModuleLoaderModule } from "../../../components/widgets/loaders/module-loader/module.loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaymentModule,
        ModuleLoaderModule
    ],
    declarations: [ PayContainerComponent ],
    exports: [ PayContainerComponent ]
})
export class PayContainerModule {}