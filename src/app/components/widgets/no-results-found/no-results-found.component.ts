import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-no-results-found',
	template: 
	`
		<div class="text-center my-4">
			<h1>No se encontraron resultados.</h1>
		</div>
	`,
	styleUrls: ['./no-results-found.component.scss']
})

export class NoResultsFoundComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}