import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-brands-list',
	template:
		`	
		<h2 class="title">
			<span class="txt">Nuestras marcas</span>
		</h2>
		<div [swiper]="config" class="swiper-container" *ngIf="!loading && brands.length">
			<div class="swiper-wrapper">
				<div class="swiper-slide" *ngFor="let brand of brands">
					<img [src]="brand.logo" [alt]="brand.title">
				</div>
			</div>
		</div>

		<div [swiper]="config" class="swiper-container" *ngIf="loading">
			<div class="swiper-wrapper">
				<div class="swiper-slide" *ngFor="let loader of loaders">
					<app-brand-list-item-loader></app-brand-list-item-loader>
				</div>
			</div>
		</div>

		<div *ngIf="!loading && !brands.length">No se encontraron resultados.</div>
		`
	,
	styleUrls: ['./brands-list.component.scss']
})

export class BrandsListComponent implements OnInit {
	@Input() brands;
	@Input() loading;
	loaders;
	config: SwiperConfigInterface = {
        pagination: null,
        spaceBetween: 0,
		slidesPerView: 8,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		loop: true,
		grabCursor: true,
		breakpoints: {
            1024: {
                slidesPerView: 6
            },
            768: {
                slidesPerView: 5
            },
            767: {
                slidesPerView: 4
            },
            480: {
              slidesPerView: 3
            }
      	}
	};
	
	constructor() { 
		this.loaders = Array(this.config.slidesPerView).fill(0).map((x,i)=>i);
	}

	ngOnInit() { }
}