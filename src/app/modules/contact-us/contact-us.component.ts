import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-us',
	template:
		`
		<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [scrollwheel]="scrollwheel">
			<agm-marker
			[latitude]="lat"
			[longitude]="lng"
			>
			<agm-info-window #infoWindow>
				<b>Armería Las Coloradas</b><br>
				Calle 43 Nº433
			</agm-info-window>
			</agm-marker>

			<div>
				asfdasdasd
			</div>
		</agm-map>
			<div class="container">
				<div class="py-md-5 py-4">
					container
				</div>
			</div>
		`
	,
	styleUrls: ['./contact-us.component.scss']
})

export class ContactUsContainerComponent implements OnInit {
	lat: number = -34.906585;
	lng: number = -57.9530369;
	zoom: number = 18;
	scrollwheel: boolean = false;
	marker = {
		lat: -34.906585,
		lng: -57.9530369,
		draggable: false
	}
	constructor() { }

	ngOnInit() { }
}