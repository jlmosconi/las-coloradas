const reducers = {};
import { ActionTypes, Actions } from '../actions/products';
const initialState = {
    highlights: [],
    selectedProduct: {},
    loading: false
};

reducers[ActionTypes.GET_HIGHLIGHTS] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.GET_HIGHLIGHTS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    highlights: payload,
    loading: false
  });
};


reducers[ActionTypes.GET_HIGHLIGHTS_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    highlights: [],
    loading: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
