import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { onStateChangeObservable } from '../../../utils/store';
import { OpenLogin } from '../../../actions/layout';
import { LocalStorageService } from "../../../services/localStorage/service";
import { QuickSearchProducts, ClearQuickSearchProducts } from "../../../actions/products";

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
	@Input() user;
	public searchForm: FormGroup;
	products$: Observable<any>;
	quickSearchLoading$: Observable<any>;
	setFull: boolean;
	cart;
	private subscription: ISubscription;
	private quickSearchLoadingSubscription: ISubscription;
	@Output() openSidenav: EventEmitter<any> = new EventEmitter();
	@Output() logOut: EventEmitter<any> = new EventEmitter();

	constructor(
		private router: Router,
		private fb: FormBuilder, 
		private store: Store<any>,
		private localStorageService: LocalStorageService
		) { 
		this.searchForm = fb.group({
			search: ['']
		});

		this.products$ = onStateChangeObservable(store, 'products.quickSearch');
		this.quickSearchLoading$ = onStateChangeObservable(store, 'products.quickSearchLoading');
		this.subscription = this.products$.subscribe();
		this.quickSearchLoadingSubscription = this.quickSearchLoading$.subscribe();
	}

	ngOnInit() { 
		this.cart = JSON.parse(localStorage.getItem('cart'));
		this.localStorageService.getItem('cart').subscribe(cart => this.cart = cart);

		let delayTimer;
		this.searchForm.get('search').valueChanges.subscribe(query => {
			clearTimeout(delayTimer);
			delayTimer = setTimeout(() => {
				query ? this.store.dispatch(new QuickSearchProducts(query)) : this.store.dispatch(new ClearQuickSearchProducts());
			}, 200);
		})
	}

	setFullSearchBar() {
		this.setFull = true;
	}

	clear() {
		this.searchForm.reset();
		this.setFull = false;
	}
	
	goToSearch(q) {
		this.router.navigate(['/busqueda', q]);
	}

	openSideNav() {
		this.openSidenav.emit();
	}

	openLogin() {
		this.store.dispatch(new OpenLogin({type: 'login'}));
	}

	logout() {
		this.logOut.emit();
	}

	unsubscribe() {
		this.subscription.unsubscribe();
		this.quickSearchLoadingSubscription.unsubscribe();
	}
}