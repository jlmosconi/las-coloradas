const reducers = {};
import { ActionTypes, Actions } from '../actions/auth';
const initialState = {
    loading: true
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
