import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { onStateChangeObservable } from '../../../utils/store';
// import { OpenLogin } from '../../../actions/layout';
// import { QuickSearchMovies, ClearQuickSearchMovies } from "../../../actions/movies";

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
	private subscription: ISubscription;
	private quickSearchLoadingSubscription: ISubscription;
	@Output() openSidenav: EventEmitter<any> = new EventEmitter();
	@Output() logOut: EventEmitter<any> = new EventEmitter();

	constructor(
		private router: Router,
		private fb: FormBuilder, 
		private store: Store<any>
		) { 
		this.searchForm = fb.group({
			search: ['']
		});
	}

	ngOnInit() { }

	setFullSearchBar() {
		this.setFull = true;
	}

	clear() {
		this.searchForm.reset();
		this.setFull = false;
	}
	
	goToSearch(q) {
		this.router.navigate(['/buscar', q]);
	}

	openSideNav() {
		this.openSidenav.emit();
	}

	openLogin() {
		//this.store.dispatch(new OpenLogin({type: 'login'}));
	}

	logout() {
		this.logOut.emit();
	}

	unsubscribe() {
		this.subscription.unsubscribe();
		this.quickSearchLoadingSubscription.unsubscribe();
	}
}