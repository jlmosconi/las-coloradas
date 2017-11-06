import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-brands-list',
	template:
		`
		<h2 class="title">
			<span class="txt">Nuestras marcas</span>
		</h2>
		<div [swiper]="config" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" *ngFor="let brand of brands">
					<img [src]="brand.img">
				</div>
			</div>
			<!-- Controls -->
			<div [hidden]="config.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
			<div [hidden]="config.pagination != '.swiper-pagination'" class="swiper-pagination"></div>
			<!-- Arrows -->
			<div [hidden]="config.nextButton != '.swiper-button-next'" class="swiper-button-next"></div>
			<div [hidden]="config.prevButton != '.swiper-button-prev'" class="swiper-button-prev"></div>
		</div>
		`
	,
	styleUrls: ['./brands-list.component.scss']
})

export class BrandsListComponent implements OnInit {
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

	brands = [
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839052/remington_qunnsq.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839051/bersa_keihit.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839052/remington_qunnsq.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839051/bersa_keihit.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839052/remington_qunnsq.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839051/bersa_keihit.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839052/remington_qunnsq.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839051/bersa_keihit.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839052/remington_qunnsq.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839051/bersa_keihit.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839052/remington_qunnsq.png'},
		{img: 'http://res.cloudinary.com/anterux/image/upload/v1509839051/bersa_keihit.png'},
	]
	constructor() { }

	ngOnInit() { }
}