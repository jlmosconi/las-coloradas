const reducers = {};
import { ActionTypes, Actions } from '../actions/about';
const initialState = {
    loading: false,
    data: {}
};

reducers[ActionTypes.GET_DATA] = (state, payload) => {
    return Object.assign({}, state, {
        loading: true,
    });
};

reducers[ActionTypes.GET_DATA_FAILURE] = (state, payload) => {
    return Object.assign({}, state, {
        loading: false,
        data: {}
    });
};

reducers[ActionTypes.GET_DATA_SUCCESS] = (state, payload) => {
    return Object.assign({}, state, {
        loading: false,
        data: payload
    });
};


export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
