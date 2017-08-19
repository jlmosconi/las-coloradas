import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
	public searchForm: FormGroup;

	constructor(private fb: FormBuilder) { 
		this.searchForm = fb.group({
			search: ['']
		});
	}

	ngOnInit() { }

	clear() {
		var searchBar = <HTMLInputElement>document.getElementById('searchBar');
		
		if (searchBar.className.match(/\bfull\b/)) {
			searchBar.classList.toggle('full');
		}

		this.searchForm.reset();
	}

	toggleSearchBar() {
		var searchBar = <HTMLInputElement>document.getElementById('searchBar');
		searchBar.classList.toggle('full');
	}
}