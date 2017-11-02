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
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/remington.png?alt=media&token=8546fa8e-c0bd-415b-82e0-015f625c4dfa'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/remington.png?alt=media&token=8546fa8e-c0bd-415b-82e0-015f625c4dfa'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/bersa.png?alt=media&token=0c57e8ef-029e-4917-a0a5-423628e4ba3e'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/remington.png?alt=media&token=8546fa8e-c0bd-415b-82e0-015f625c4dfa'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/bersa.png?alt=media&token=0c57e8ef-029e-4917-a0a5-423628e4ba3e'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/remington.png?alt=media&token=8546fa8e-c0bd-415b-82e0-015f625c4dfa'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/bersa.png?alt=media&token=0c57e8ef-029e-4917-a0a5-423628e4ba3e'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/remington.png?alt=media&token=8546fa8e-c0bd-415b-82e0-015f625c4dfa'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/bersa.png?alt=media&token=0c57e8ef-029e-4917-a0a5-423628e4ba3e'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/remington.png?alt=media&token=8546fa8e-c0bd-415b-82e0-015f625c4dfa'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/bersa.png?alt=media&token=0c57e8ef-029e-4917-a0a5-423628e4ba3e'},
		{img: 'https://firebasestorage.googleapis.com/v0/b/las-coloradas-development.appspot.com/o/bersa.png?alt=media&token=0c57e8ef-029e-4917-a0a5-423628e4ba3e'},
	]
	constructor() { }

	ngOnInit() { }
}