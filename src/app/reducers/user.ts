const reducers = {};
import { ActionTypes, Actions } from '../actions/user';
const initialState = {
    userData: null,
    cart: null,
    loadingCart: false,
    loading: true
};

reducers[ActionTypes.GET_USER] = (state, payload) => {
    return Object.assign({}, state, {
        loading: true
    });
};

reducers[ActionTypes.AUTHENTICATED] = (state, payload) => {
    return Object.assign({}, state, {
        userData: payload,
        loading: false
    });
};

reducers[ActionTypes.NOT_AUTHENTICATED] = (state, payload) => {
    return Object.assign({}, state, {
        userData: null,
        loading: false
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
