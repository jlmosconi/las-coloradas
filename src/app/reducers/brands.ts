const reducers = {};
import { ActionTypes, Actions } from '../actions/brands';
const initialState = {
    brandsLoading: false,
    brandsList: []
};

reducers[ActionTypes.GET_ALL] = (state, payload) => {
    return Object.assign({}, state, {
        brandsLoading: true,
    });
};

reducers[ActionTypes.GET_ALL_FAILURE] = (state, payload) => {
    return Object.assign({}, state, {
        brandsLoading: false,
        brandsList: []
    });
};

reducers[ActionTypes.GET_ALL_SUCCESS] = (state, payload) => {
    return Object.assign({}, state, {
        brandsLoading: false,
        brandsList: payload
    });
};


export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
