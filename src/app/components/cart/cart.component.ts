import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-cart',
	template: 
		`
		<!--      Wizard container        -->
		<div class="wizard-container">
		<div class="card wizard-card" data-color="red" id="wizard">
		<form action="" method="">
		<!--        You can switch " data-color="green" "  with one of the next bright colors: "blue", "azure", "orange", "red"       -->

				<div class="wizard-header">
					<h3 class="wizard-title">List your place</h3>
					<p class="category">This information will let us know more about your place.</p>
				</div>
				<div class="wizard-navigation">
				<div class="progress-with-circle">
					<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 12.5%;"></div>
				</div>
				<ul class="nav nav-pills">
					<li class="active" style="width: 25%;">
						<a href="#location" data-toggle="tab" aria-expanded="true">
							<div class="icon-circle checked">
								<i class="ti-map"></i>
							</div>
							Location
						</a>
					</li>
					<li style="width: 25%;" class="">
						<a href="#type" data-toggle="tab" aria-expanded="false">
							<div class="icon-circle checked">
								<i class="ti-direction-alt"></i>
							</div>
							Type
						</a>
					</li>
					<li style="width: 25%;" class="">
						<a href="#facilities" data-toggle="tab" aria-expanded="false">
							<div class="icon-circle checked">
								<i class="ti-panel"></i>
							</div>
							Facilities
						</a>
					</li>
					<li style="width: 25%;" class="">
						<a href="#description" data-toggle="tab" aria-expanded="false">
							<div class="icon-circle checked">
								<i class="ti-comments"></i>
							</div>
							Comments
						</a>
					</li>
				</ul>
			</div>
				<div class="tab-content">
					content
				</div>
				<div class="wizard-footer">
					<div class="pull-right">
						<input type='button' class='btn btn-next btn-fill btn-danger btn-wd' name='next' value='Next' />
						<input type='button' class='btn btn-finish btn-fill btn-danger btn-wd' name='finish' value='Finish' />
					</div>

					<div class="pull-left">
						<input type='button' class='btn btn-previous btn-default btn-wd' name='previous' value='Previous' />
					</div>
					<div class="clearfix"></div>
				</div>
			</form>
		</div>
	</div> <!-- wizard container -->


			<div *ngIf="!cart">
				Carrito vacío
			</div>
			<div class="table-responsive" *ngIf="cart">
				<table class="table table-shopping w-100">
					<thead>
						<tr>
							<th class="text-center"></th>
							<th>Producto</th>
							<th class="text-right">Precio</th>
							<th class="text-right">Cantidad</th>
							<th class="text-right">Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let product of cart">
							<td>
								<div class="img-container">
									<img [src]="product.photoUrl" [alt]="product.title">
								</div>
							</td>
							<td class="td-name">
								<a [routerLink]="['/producto', product.id, product.slug]">{{ product.title }}</a>
							</td>
							<td class="td-number">
								<small>$</small> {{ product.price }}
							</td>
							<td class="td-number">
								1
								<div class="btn-group ml-3">
									<button mat-raised-button class="btn btn-round btn-info btn-xs"> <i class="material-icons">remove</i> </button>
									<button mat-raised-button class="btn btn-round btn-info btn-xs"> <i class="material-icons">add</i> </button>
								</div>
							</td>
							<td class="td-number">
								<small>€</small>549
							</td>
							<td class="td-actions">
								<button mat-icon-button type="button" rel="tooltip" data-placement="left" title="" class="btn btn-simple" data-original-title="Remove item">
									<i class="material-icons">close</i>
								</button>
							</td>
						</tr>
						<tr>
							<td colspan="3"></td>
							<td class="td-total">
								Total
							</td>
							<td class="td-price">
								<small>€</small>2,346
							</td>
							<td colspan="1"></td>
						</tr>
					</tbody>
				</table>
			</div>
		`,
	styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
	@Input() cart;
	constructor() { }

	ngOnInit() { }
}