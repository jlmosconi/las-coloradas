import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListItemLoaderComponent } from "./brand-list-item-loader.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ BrandListItemLoaderComponent ],
    exports: [ BrandListItemLoaderComponent ]
})
export class BrandListItemLoaderModule {}