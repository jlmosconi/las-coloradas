const reducers = {};
import { ActionTypes, Actions } from '../actions/categories';
const initialState = {
    loading: false,
    list: []
};

reducers[ActionTypes.GET_CATEGORIES] = (state, payload) => {
    return Object.assign({}, state, {
        loading: true,
    });
};

reducers[ActionTypes.GET_CATEGORIES_FAILURE] = (state, payload) => {
    return Object.assign({}, state, {
        loading: initialState.loading,
        list: initialState.list
    });
};

reducers[ActionTypes.GET_CATEGORIES_SUCCESS] = (state, payload) => {
    return Object.assign({}, state, {
        loading: false,
        list: payload
    });
};


export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
