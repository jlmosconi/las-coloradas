import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-product-carousel',
	template: `
		<div class="carousel">
			<div class="header">
				<h1>{{ title }}</h1>
			</div>
			<div [swiper]="config" class="swiper-container" *ngIf="products && products.length">
				<div class="swiper-wrapper">
					<div class="swiper-slide" *ngFor="let product of products">
						<app-product-card [product]="product"></app-product-card>
					</div>
				</div>
				<!-- Controls -->
				<div [hidden]="config.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
				<div [hidden]="config.pagination != '.swiper-pagination'" class="swiper-pagination"></div>
				<!-- Arrows -->
				<div [hidden]="config.nextButton != '.swiper-button-next'" class="swiper-button-next"></div>
				<div [hidden]="config.prevButton != '.swiper-button-prev'" class="swiper-button-prev"></div>
			</div>

			<div [swiper]="config" class="swiper-container" *ngIf="!products.length">
				<div class="swiper-wrapper">
					<div class="swiper-slide" *ngFor="let item of items">
						<app-product-card-loader></app-product-card-loader>  
					</div>
				</div>
			</div>
		</div> 
	`,
	styleUrls: ['./product-carousel.component.scss']
})

export class ProductCarouselComponent implements OnInit {
	@Input() products;
	@Input() title;
	public items;
	public config: SwiperConfigInterface = {
        pagination: null,
        nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        slidesPerView: 5,
		breakpoints: {
            1024: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
            480: {
              slidesPerView: 1
            }
      	}
	  };
	constructor() { 
		this.items = Array(this.config.slidesPerView).fill(0).map((x,i)=>i);
	}

	ngOnInit() { }
}