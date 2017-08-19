import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-product-list',
	template: `
		<div [swiper]="config" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<app-product-card></app-product-card>
				</div>
			</div>
			<!-- Controls -->
			<div [hidden]="config.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
			<div [hidden]="config.pagination != '.swiper-pagination'" class="swiper-pagination"></div>
			<!-- Arrows -->
			<div [hidden]="config.nextButton != '.swiper-button-next'" class="swiper-button-next"></div>
			<div [hidden]="config.prevButton != '.swiper-button-prev'" class="swiper-button-prev"></div>
		</div>
	`,
	styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
	public config: SwiperConfigInterface = {
        pagination: null,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerView: 5,
         breakpoints: {
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 40
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
            767: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            480: {
              slidesPerView: 'auto',
              spaceBetween: 10,
            }
      	}
  	};
	constructor() { }

	ngOnInit() { }
}