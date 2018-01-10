import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-confirm',
	template: 
		`
			confirm
		`
	,
	styleUrls: ['./confirm.component.scss']
})

export class ConfirmComponent implements OnInit {
	@Input() user;
	constructor() { }

	ngOnInit() { }
}