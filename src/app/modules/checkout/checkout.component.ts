import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
							<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 12.5%;"></div>
						</div>
						<ul class="nav nav-pills">
							<li class="active" style="width: 25%;">
								<a routerLink="carrito" data-toggle="tab" aria-expanded="true">
									<div class="icon-circle checked">
										<i class="ti-map material-icons">shopping_cart</i>
									</div>
									Carrito
								</a>
							</li>
							<li style="width: 25%;">
								<a routerLink="envio" data-toggle="tab">
									<div class="icon-circle">
										<i class="ti-direction-alt material-icons">local_shipping</i>
									</div>
									Envío
								</a>
							</li>
							<li style="width: 25%;">
								<a href="#facilities" data-toggle="tab">
									<div class="icon-circle">
										<i class="ti-panel material-icons">payment</i>
									</div>
									Pago
								</a>
							</li>
							<li style="width: 25%;">
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

	constructor(private activatedRoute: ActivatedRoute) { 
		this.activatedRoute.paramMap.subscribe((data:any) => {
			console.warn(data);
		});

		console.warn(this.activatedRoute.snapshot.data.step);
	}

	ngOnInit() { }
}