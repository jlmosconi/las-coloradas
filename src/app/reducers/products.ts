const reducers = {};
import { ActionTypes, Actions } from '../actions/products';
const initialState = {
    highlights: [],
    latest: [],
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

reducers[ActionTypes.GET_LATEST] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.GET_LATEST_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    latest: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_LATEST_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    latest: [],
    loading: false
  });
};

reducers[ActionTypes.GET_DETAIL_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    selectedProduct: payload
  });
};

reducers[ActionTypes.GET_DETAIL_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    selectedProduct: {}
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
