import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from "./shipping.component";
import { AlertModule } from "../../widgets/alert/alert.module";

@NgModule({
    imports: [ 
        CommonModule,
        AlertModule
    ],
    declarations: [ ShippingComponent ],
    exports: [ ShippingComponent ]
})
export class ShippingModule {}