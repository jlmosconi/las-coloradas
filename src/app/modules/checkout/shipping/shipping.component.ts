import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-shipping-container',
	template: 
		`
		<h3 class="info-text text-center py-3">Formas de entrega</h3>
		<div class="row">
			<div class="col-sm-8 offset-sm-2">
				<div class="row">
					<div class="col-sm-4" *ngFor="let shipping of shippings">
						<div class="choice" data-toggle="wizard-checkbox" [ngClass]="{'active': shippingType.get('type').value === shipping.id }" (click)="select(shipping.id)">
							<input type="checkbox" name="jobb" value="Design" checked="checked">
							<div class="card card-checkboxes card-hover-effect">
								<i class="ti-home material-icons">{{ shipping.icon }}</i>
								<p>{{ shipping.title }}</p>
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

export class ShippingContainerComponent implements OnInit {
	shippingType;
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
	constructor(private fb: FormBuilder) { 
		this.shippingType = this.fb.group({
			type: [3],
		});
	}

	ngOnInit() { }

	select(id){
		this.shippingType.get('type').setValue(id);
	}
}