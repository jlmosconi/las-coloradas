import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-checkout',
	template:
		`
		<div class="container">
			<div class="pt-4 pt-md-5">
				<div class="wizard mb-5">
					<div class="wizard-navigation h-100">
						<div class="progress-with-circle">
							<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" [ngStyle]="{'width': progressBar+'%'}" ></div>
						</div>
						<ul class="nav nav-pills" id="steps">
							<li class="w-25" id="cart">
								<a routerLink="carrito" aria-expanded="true">
									<div class="icon-circle">
										<i class="material-icons">shopping_cart</i>
									</div>
									Carrito
								</a>
							</li>
							<li class="w-25" id="shipping">
								<a routerLink="envio">
									<div class="icon-circle">
										<i class="ti-direction-alt material-icons">local_shipping</i>
									</div>
									Envío
								</a>
							</li>
							<li class="w-25" id="pay">
								<a routerLink="pago">
									<div class="icon-circle">
										<i class="material-icons">payment</i>
									</div>
									Pago
								</a>
							</li>
							<li class="w-25" id="check">
								<a>
									<div class="icon-circle">
										<i class="material-icons">check</i>
									</div>
									Confirmar
								</a>
							</li>
						</ul>
					</div>
				</div>

				<router-outlet></router-outlet>

				<div class="d-flex justify-content-between pt-5">
					<button mat-raised-button color="accent" class="text-white">Anterior</button>
					<button mat-raised-button color="primary">Siguiente</button>
				</div>
			</div>
		</div>
		`
	,
	styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
	progressBar: number = 0;
	constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			console.warn(evt);
			this.wizard(this.activatedRoute.snapshot.firstChild.data.step)
		});
	}

	ngOnInit() { }

	wizard(step) {
		let steps = document.getElementById('steps');
		let childElementCount = steps.childElementCount;
		
		for(var i = 0; i< steps.children.length;i++) {
			let children = steps.children[i];
			children.classList.remove('active');
			children.classList.remove('checked');

		  if(children.getAttribute('id') == step) {
			this.calculateProgressBar(i, childElementCount);
			this.setNextStep(i);
			children.classList.add('active');
			for(var j = 0; j < i;j++) {
				steps.children[j].classList.add('checked');
			}
		  }
		}
	}

	calculateProgressBar(index, childElementCount) {
		this.progressBar = ((100 / childElementCount) * index) + ((100 / childElementCount) / 2);
	}

	setNextStep(index) {

	}
}