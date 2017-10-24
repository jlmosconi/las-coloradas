import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatProgressSpinnerModule } from "@angular/material";
import { SearchBarComponent } from "./search-bar.component";

@NgModule({
    imports: [ 
        CommonModule,
        MatIconModule, 
        MatButtonModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule
    ],
    declarations: [ SearchBarComponent ],
    exports: [ SearchBarComponent ]
})
export class SearchBarModule {}