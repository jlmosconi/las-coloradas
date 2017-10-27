import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './about-us.routes';
import { AboutUsContainerComponent } from "./about-us.component";

@NgModule({
    imports: [ 
        CommonModule,
        routing
    ],
    declarations: [ AboutUsContainerComponent ],
    exports: [ AboutUsContainerComponent ]
})

export class AboutUsModule { }