import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { ConfirmComponent } from "./confirm.component";

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    declarations: [ ConfirmComponent ],
    exports: [ ConfirmComponent ]
})

export class ConfirmModule {}