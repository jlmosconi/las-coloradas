import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-logo',
	template:
		`
			<div class="letter mr-2">
				<div class="l"></div>
			</div>
			<div class="letter">
				<div class="c"></div>
			</div>
		`
	,
	styleUrls: ['./logo.component.scss']
})

export class LogoComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}