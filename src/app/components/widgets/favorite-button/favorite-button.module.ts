import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from "./favorite-button.component";
import { MatButtonModule, MatIconModule } from "@angular/material";

@NgModule({
	imports: [ 
		CommonModule,
		MatButtonModule,
		MatIconModule
	],
	declarations: [ FavoriteButtonComponent ],
	exports: [ FavoriteButtonComponent ]
})
export class FaboriteButtonModule {}