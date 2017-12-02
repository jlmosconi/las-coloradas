import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-checkout',
	template:
		`
		<div class="container">
			<div class="pt-4 pt-md-5">
				<div class="wizard mb-5">
					<div class="wizard-navigation h-100">
						<div class="progress-with-circle">
							<div class="progress-bar" id="progressBar"></div>
						</div>
						<ul class="nav nav-pills" id="steps">
							<li class="w-25" *ngFor="let step of steps" id="{{step.id}}">
								<a routerLink="{{step.route}}" aria-expanded="true">
									<div class="icon-circle">
										<i class="material-icons">{{ step.icon }}</i>
									</div>
									{{ step.label }}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<router-outlet></router-outlet>

				<div class="d-flex justify-content-between pt-5">
					<button mat-raised-button color="accent" class="text-white" routerLink="{{prevStepRoute}}">Anterior</button>
					<button mat-raised-button color="primary" routerLink="{{nextStepRoute}}">Siguiente</button>
				</div>
			</div>
		</div>
		`
	,
	styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
	steps = [
		{
			label: 'Carrito',
			id: 'cart',
			icon: 'shopping_cart',
			route: 'carrito'
		},
		{
			label: 'Envío',
			id: 'shipping',
			icon: 'local_shipping',
			route: 'envio'
		},
		{
			label: 'Pago',
			id: 'pay',
			icon: 'payment',
			route: 'pago'
		},
		{
			label: 'Confirmar',
			id: 'confirm',
			icon: 'check',
			route: 'confirmar'
		},
	];
	currentStep;
	nextStepRoute;
	prevStepRoute;
	private subscriptionRouter: ISubscription;
	constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
		this.subscriptionRouter = this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) return;
			this.currentStep = this.activatedRoute.snapshot.firstChild.data.step;
			this.wizard();
		});
	}

	ngOnInit() { }

	ngAfterViewInit() {
		this.wizard();
	}

	wizard() {
		let steps = document.getElementById('steps');
		let childElementCount = steps.childElementCount;
		if(steps && childElementCount) {
			for(var i = 0; i< steps.children.length;i++) {
				let children = steps.children[i];
				children.classList.remove('active');
				children.classList.remove('checked');

				if(children.getAttribute('id') == this.currentStep) {
					children.classList.add('active');
					for(var j = 0; j < i;j++) {
						steps.children[j].classList.add('checked');
					}

					this.calculateProgressBar(i, childElementCount);
					this.setNextStep(i, childElementCount);
					this.setPrevStep(i);
				}
			}
		}
	}

	calculateProgressBar(index, childElementCount) {
		let progressBar = document.getElementById('progressBar');
		let progressBarWidth = ((100 / childElementCount) * index) + ((100 / childElementCount) / 2);
		progressBar.style.width = progressBarWidth+'%';
	}

	setNextStep(index, childElementCount) {
		this.nextStepRoute = index + 1 == childElementCount ? this.steps[index].route : this.steps[index + 1].route;
	}

	setPrevStep(index) {
		this.prevStepRoute = index == 0 ? this.steps[index].route : this.steps[index - 1].route;
	}

	ngOnDestroy() {
		this.subscriptionRouter.unsubscribe();
	}
}