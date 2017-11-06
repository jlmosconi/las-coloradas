import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoModule } from "../../widgets/logo/logo.module";
import { SearchBarModule } from "./search-bar/search-bar.module";
import { ShoppingCartIconModule } from "./shopping-cart-icon/shopping-cart-icon.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        LogoModule,
        SearchBarModule,
        ShoppingCartIconModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }