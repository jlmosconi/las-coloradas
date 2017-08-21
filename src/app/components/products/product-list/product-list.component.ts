import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-product-list',
	template: `
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
	`,
	styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
	@Input() products;
	public items;
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
	constructor() { 
		this.items = Array(5).fill(0).map((x,i)=>i);
	}

	ngOnInit() { }
}