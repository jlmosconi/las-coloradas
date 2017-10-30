import { combineReducers } from '@ngrx/store';
import aboutReducer from "./about";
import contactReducer from "./contact";
import productsReducer from './products';
import userReducer from "./user";

const reducers = {
  about: aboutReducer,
  contact: contactReducer,
  products: productsReducer,
  user: userReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
