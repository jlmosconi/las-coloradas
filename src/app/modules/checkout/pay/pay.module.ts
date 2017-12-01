import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayContainerComponent } from "./pay.component";
import { ModuleLoaderModule } from "../../../components/widgets/loaders/module-loader/module.loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        ModuleLoaderModule
    ],
    declarations: [ PayContainerComponent ],
    exports: [ PayContainerComponent ]
})
export class PayContainerModule {}