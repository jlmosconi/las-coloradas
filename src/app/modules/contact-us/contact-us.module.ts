import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./contact-us.routes";
import { ContactUsContainerComponent } from "./contact-us.component";
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
    } from '@angular/material';

@NgModule({
    imports: [ 
        CommonModule,
        routing,
        AgmCoreModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [ ContactUsContainerComponent ],
    exports: [ ContactUsContainerComponent ]
})
export class ContactUsModule {}