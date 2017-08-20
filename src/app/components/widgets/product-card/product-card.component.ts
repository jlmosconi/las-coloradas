import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-card',
	template: 
	`
		<div class="product w-100">
			<div class="product-img">
				<div class="img" style="background-image: url(&quot;http://res.cloudinary.com/dhopmwqnn/image/upload/v1498434055/wmxnx51895y0ge0ucyfc.jpg&quot;);"></div>
			</div>
			<div class="product-info">
				<div class="product-price">
					<span class="money ng-binding">$ 10580</span>
				</div>
				<div class="product-name">
					<a>Pistola BERSA THUNDER 9 PRO</a>
				</div>
				<div class="product-description mb-2"><p>Pistola semiautomatica BERSA modelo Thunder 9 Pro cal. 9 mm Pavón Negra 17 TIROS</p></div>
				<div class="product-links py-3 d-flex w-100 justify-content-between align-items-center">
					<button md-raised-button color="accent" class="text-white">
						Ver
					</button>
					
					<button md-raised-button color="primary">
						Añadir al carrito
					</button>
				</div>
			</div>
		</div>	
	`,
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}