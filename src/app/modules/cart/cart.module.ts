import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './cart.routes';
import { CartContainerComponent } from "./cart.component";
import { CartModule } from "../../components/cart/cart.module";
import { ModuleLoaderModule } from "../../components/widgets/loaders/module-loader/module.loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        routing,
        CartModule,
        ModuleLoaderModule
    ],
    declarations: [ CartContainerComponent ],
    exports: [ CartContainerComponent ]
})
export class CartContainerModule {}