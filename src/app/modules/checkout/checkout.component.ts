import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-checkout',
	template:
		`
		<div class="container">
			<div class="pt-4 pt-md-5">
				<!--      Wizard container        -->
				<div class="wizard-card" style="padding-bottom:150px;">
					<div class="wizard-navigation">
						<div class="progress-with-circle">
							<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" [ngStyle]="{'width': progressBar+'%'}" ></div>
						</div>
						<ul class="nav nav-pills" id="steps">
							<li class="w-25" id="cart">
								<a routerLink="carrito" data-toggle="tab" aria-expanded="true">
									<div class="icon-circle checked">
										<i class="ti-map material-icons">shopping_cart</i>
									</div>
									Carrito
								</a>
							</li>
							<li class="w-25" id="shipping">
								<a routerLink="envio" data-toggle="tab">
									<div class="icon-circle">
										<i class="ti-direction-alt material-icons">local_shipping</i>
									</div>
									Envío
								</a>
							</li>
							<li class="w-25" id="pay">
								<a routerLink="pago" data-toggle="tab">
									<div class="icon-circle">
										<i class="ti-panel material-icons">payment</i>
									</div>
									Pago
								</a>
							</li>
							<li class="w-25" id="check">
								<a href="#description" data-toggle="tab">
									<div class="icon-circle">
										<i class="ti-comments material-icons">check</i>
									</div>
									Confirmar
								</a>
							</li>
						</ul>
					</div>
				</div> <!-- wizard container -->

				<router-outlet></router-outlet>

				<div class="d-flex justify-content-between">
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
		console.warn('step: ', step);
		let wizard = document.getElementById('steps');
		let count = wizard.childElementCount;
		
		for(var i = 0; i< wizard.children.length;i++)
		{
			wizard.children[i].classList.remove('active');
		  if (wizard.children[i].getAttribute('id') == step) // any attribute could be used here
		  {
			this.calculateProgressBar(i, count);
			//
			wizard.children[i].classList.add('active');
			for(var j = 0; j < i;j++) {
				wizard.children[j].classList.add('active');
			}
	  
		  }
		}

		console.warn(document.getElementById(step));
	}

	calculateProgressBar(index, total) {
		let tot = 100 / total;
		let halfCircle = tot / 2;
		let progressBarWifth = (tot * index) + halfCircle;
		this.progressBar = progressBarWifth;
	}

	nextStep() {
		
	}
}