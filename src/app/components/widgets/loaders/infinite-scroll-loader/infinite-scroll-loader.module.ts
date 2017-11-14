import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollLoaderComponent } from "./infinite-scroll-loader.component";
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
    imports: [ 
        CommonModule,
        MatProgressSpinnerModule
    ],
    declarations: [ InfiniteScrollLoaderComponent ],
    exports: [ InfiniteScrollLoaderComponent ]
})
export class InfiniteScrollLoaderModule {}