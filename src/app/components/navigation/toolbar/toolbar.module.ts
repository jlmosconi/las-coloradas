import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
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