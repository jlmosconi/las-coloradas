import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContainerComponent } from "./cart.component";
import { CartModule } from "../../../components/checkout/cart/cart.module";
import { ModuleLoaderModule } from "../../../components/widgets/loaders/module-loader/module.loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        CartModule,
        ModuleLoaderModule
    ],
    declarations: [ CartContainerComponent ],
    exports: [ CartContainerComponent ]
})
export class CartContainerModule {}