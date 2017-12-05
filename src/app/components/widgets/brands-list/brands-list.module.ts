import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { BrandsListComponent } from "./brands-list.component";
import { BrandListItemLoaderModule } from "../loaders/brand-list-item-loader/brand-list-item-loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        SwiperModule,
        BrandListItemLoaderModule
    ],
    declarations: [ BrandsListComponent ],
    exports: [ BrandsListComponent ]
})
export class BrandsListModule {}