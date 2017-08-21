import { combineReducers } from '@ngrx/store';
import productsReducer from './products';

const reducers = {
  products: productsReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
