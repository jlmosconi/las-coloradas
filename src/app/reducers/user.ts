const reducers = {};
import { ActionTypes, Actions } from '../actions/user';
const initialState = {
    userData: null,
    cart: null,
    loadingCart: false,
    loadingUser: true
};

reducers[ActionTypes.GET_USER] = (state, payload) => {
    return Object.assign({}, state, {
        loadingUser: true
    });
};

reducers[ActionTypes.AUTHENTICATED] = (state, payload) => {
    return Object.assign({}, state, {
        userData: payload,
        loadingUser: false
    });
};

reducers[ActionTypes.NOT_AUTHENTICATED] = (state, payload) => {
    return Object.assign({}, state, {
        userData: null,
        loadingUser: false
    });
};


reducers[ActionTypes.GET_USER_CART] = (state, payload) => {
    return Object.assign({}, state, {
        loadingCart: true
    });
};


reducers[ActionTypes.GET_USER_CART_SUCCESS] = (state, payload) => {
    return Object.assign({}, state, {
        cart: payload,
        loadingCart: false
    });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
