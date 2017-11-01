import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { BrandsListComponent } from "./brands-list.component";

@NgModule({
    imports: [ 
        CommonModule,
        SwiperModule
    ],
    declarations: [ BrandsListComponent ],
    exports: [ BrandsListComponent ]
})
export class BrandsListModule {}