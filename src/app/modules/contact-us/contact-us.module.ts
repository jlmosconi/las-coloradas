import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./contact-us.routes";
import { ContactUsContainerComponent } from "./contact-us.component";
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [ 
        CommonModule,
        routing,
        AgmCoreModule
    ],
    declarations: [ ContactUsContainerComponent ],
    exports: [ ContactUsContainerComponent ]
})
export class ContactUsModule {}