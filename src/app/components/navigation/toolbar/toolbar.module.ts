import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { MdToolbarModule, MdIconModule, MdMenuModule, MdButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MdToolbarModule,
        MdIconModule,
        MdMenuModule,
        MdButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }