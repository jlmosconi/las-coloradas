import { combineReducers } from '@ngrx/store';
import productsReducer from './products';
import userReducer from "./user";

const reducers = {
  products: productsReducer,
  user: userReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
