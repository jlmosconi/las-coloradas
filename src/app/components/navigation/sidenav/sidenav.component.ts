import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-sidenav',
	template:
		`
		<div class="d-flex h-100 w-100 o-hidden">
			<div class="header d-flex align-items-center">
			<button mat-icon-button color="accent" class="mr-mat-3 mr-2" (click)="closeSideNav()">
				<mat-icon>menu</mat-icon>
			</button>
				<span class="company-name">
					Las Coloradas
				</span>
			</div>
			<!-- Swiper -->
			<div [swiper]="config" class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<mat-nav-list>
							<mat-list-item routerLink="/">
								<mat-icon mat-list-icon color="accent">home</mat-icon> 
								<h4 mat-line>Inicio</h4>
							</mat-list-item>
							<mat-list-item routerLink="/">
								<mat-icon mat-list-icon color="accent">favorite</mat-icon> 
								<h4 mat-line>Favoritos</h4>
							</mat-list-item>
						</mat-nav-list>
						<mat-divider></mat-divider>
						<mat-list>
							<h3 mat-subheader class="text-uppercase">CATEGORÍAS</h3>
							<mat-nav-list>
								<mat-list-item *ngFor="let genre of genres" [routerLink]="['/genero', genre.id, genre.slug]" routerLinkActive="mat-list-item-focus">
									<h4 mat-line>{{ genre.name }}</h4>
								</mat-list-item>
							</mat-nav-list>
					  	</mat-list>
					</div>
				</div>
				<div [hidden]="config.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
			</div>
		</div>
		`,
	styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
	@Input() genres;
	@Output() closeSidenav: EventEmitter<any> = new EventEmitter();
	public config: SwiperConfigInterface = {
		scrollbar: '.swiper-scrollbar',
		direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
		freeMode: true,
		scrollbarHide: true
	}
	constructor() { }

	ngOnInit() { }

	closeSideNav() {
		this.closeSidenav.emit();
	}
}