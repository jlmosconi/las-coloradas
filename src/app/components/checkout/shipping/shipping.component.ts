import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-shipping',
	template: 
		`
		<div class="row">
			<div class="col-sm-8 offset-sm-2">
				<div class="row">
					<div class="col-sm-4" *ngFor="let shipping of shippings">
						<div class="choice" data-toggle="wizard-checkbox" [ngClass]="{'active': userCheckout.shipping === shipping.id }" (click)="select(shipping.id)">
							<div class="card card-checkboxes card-hover-effect">
								<i class="ti-home material-icons">{{ shipping.icon }}</i>
								<p>{{ shipping.title }}</p>
							</div>
						</div>
					</div>

					<div class="info w-100 mt-3 mt-md-5">
						<div class="col-12">
							<div class="card p-3" *ngIf="userCheckout.shipping === 1">
								<div class="d-flex mb-2"> <div class="material-icons mr-3">pin_drop</div> Calle 43 entre 3 Y 4 N°433 La Plata, Buenos Aires</div>
								<div class="d-flex"> <div class="material-icons mr-3">watch_later</div> Lunes - Viernes: 9:00 a 12:00, Sabados: 9:00 a 13:00</div>
							</div>

							<div class="card p-3" *ngIf="userCheckout.shipping === 2">
								sucursal
							</div>

							<div class="card p-3" *ngIf="userCheckout.shipping === 3">
								domicilio
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
	,
	styleUrls: ['./shipping.component.scss']
})

export class ShippingComponent implements OnInit {
	@Input() userCheckout;
	@Input() shipping;
	@Output() saveShipping: EventEmitter<any> = new EventEmitter();
	shippings = [
		{
			id: 1,
			title: 'Retiro en local',
			icon: 'domain'
		},
		{
			id: 2,
			title: 'Retiro en una sucursal',
			icon: 'local_shipping'
		},
		{
			id: 3,
			title: 'Normal a domicilio',
			icon: 'home'
		}
	]
	constructor() { }

	ngOnInit() { }

	select(id){
		this.saveShipping.emit(id)
	}
}