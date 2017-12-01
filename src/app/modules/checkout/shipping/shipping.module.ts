import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingContainerComponent } from "./shipping.component";
import { ShippingModule } from "../../../components/checkout/shipping/shipping.module";
import { ModuleLoaderModule } from "../../../components/widgets/loaders/module-loader/module.loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        ShippingModule,
        ModuleLoaderModule
    ],
    declarations: [ ShippingContainerComponent ],
    exports: [ ShippingContainerComponent ]
})
export class ShippingContainerModule {}