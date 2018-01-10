import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmContainerComponent } from "./confirm.component";
import { ConfirmModule } from "../../../components/checkout/confirm/confirm.module";
import { ModuleLoaderModule } from "../../../components/widgets/loaders/module-loader/module.loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        ConfirmModule,
        ModuleLoaderModule
    ],
    declarations: [ ConfirmContainerComponent ],
    exports: [ ConfirmContainerComponent ]
})
export class ConfirmContainerModule {}