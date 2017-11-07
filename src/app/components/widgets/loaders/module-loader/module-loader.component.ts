import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-module-loader',
	template: 
		`
			<div class="loader">
				<mat-spinner></mat-spinner>
			</div>
		`
	,
	styleUrls: ['./module-loader.component.scss']
})

export class ModuleLoaderComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}