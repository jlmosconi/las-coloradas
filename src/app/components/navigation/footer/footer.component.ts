import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	template:
		`
		<div class="footer">
			<div class="container">
				<p class="copyright">
					© {{ currentYear }} Las Coloradas. All Rights Reserved.
				</p>
			</div>
		</div>
		`,
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
	currentYear;
	constructor() {
		this.currentYear = (new Date()).getFullYear();
	 }

	ngOnInit() { }
}