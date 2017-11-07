import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from "@angular/material";
import { ModuleLoaderComponent } from "./module-loader.component";

@NgModule({
    imports: [ 
        CommonModule,
        MatProgressSpinnerModule
    ],
    declarations: [ ModuleLoaderComponent ],
    exports: [ ModuleLoaderComponent ]
})
export class ModuleLoaderModule {}