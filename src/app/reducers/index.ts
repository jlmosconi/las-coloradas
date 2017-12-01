import { combineReducers } from '@ngrx/store';
import aboutReducer from "./about";
import authReducer from "./about";
import checkoutReducer from "./checkout"
import contactReducer from "./contact";
import productsReducer from './products';
import userReducer from "./user";

const reducers = {
  about: aboutReducer,
  auth: authReducer,
  checkout: checkoutReducer,
  contact: contactReducer,
  products: productsReducer,
  user: userReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
