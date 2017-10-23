import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule, MatIconModule, MatButtonModule } from "@angular/material";
import { SidenavComponent } from "./sidenav.component";
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        SwiperModule
    ],
    declarations: [ SidenavComponent ],
    exports: [ SidenavComponent ]
})
export class SidenavModule {}