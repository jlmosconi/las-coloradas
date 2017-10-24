const reducers = {};
import { ActionTypes, Actions } from '../actions/user';
const initialState = {
    userData: null,
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

reducers[ActionTypes.SOCIAL_LOGIN] = (state, payload) => {
    return Object.assign({}, state, {
        loading: true
    });
};

reducers[ActionTypes.LOGOUT] = (state, payload) => {
    return Object.assign({}, state, {
        loading: true
    });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
