import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './about-us.routes';
import { AboutUsContainerComponent } from "./about-us.component";
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
    imports: [ 
        CommonModule,
        routing,
        SwiperModule
    ],
    declarations: [ AboutUsContainerComponent ],
    exports: [ AboutUsContainerComponent ]
})

export class AboutUsModule { }