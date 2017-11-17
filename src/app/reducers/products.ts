const reducers = {};
import { ActionTypes, Actions } from '../actions/products';
const initialState = {
  highlights: [],
  latest: [],
  related: [],
  filteredProducts: [],
  currentPage: 0,
  totalPages: 0,
  selectedProduct: {},
  selectedProductLoading: true,
  searchList: [],
  quickSearch: [],
  quickSearchLoading: false,
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

reducers[ActionTypes.GET_RELATED_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    related: payload
  });
};

reducers[ActionTypes.GET_RELATED_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    related: []
  });
};

reducers[ActionTypes.GET_DETAIL] = (state, payload) => {
  return Object.assign({}, state, {
    selectedProductLoading: true
  });
};

reducers[ActionTypes.GET_DETAIL_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    selectedProduct: payload,
    selectedProductLoading: false
  });
};

reducers[ActionTypes.GET_DETAIL_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    selectedProduct: {},
    selectedProductLoading: false
  });
};

reducers[ActionTypes.QUICK_SEARCH_PRODUCTS] = (state, payload) => {
  return Object.assign({}, state, {
    quickSearchLoading: true
  });
};

reducers[ActionTypes.CLEAR_QUICK_SEARCH_PRODUCTS] = (state, payload) => {
  return Object.assign({}, state, {
    quickSearch: []
  });
};

reducers[ActionTypes.QUICK_SEARCH_PRODUCTS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    quickSearch: payload,
    quickSearchLoading: false
  });
};

reducers[ActionTypes.SEARCH_PRODUCTS] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.SEARCH_PRODUCTS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    searchList: state.searchList.concat(payload.hits),
    currentPage: payload.currentPage,
    totalPages: payload.totalPages,
    loading: false
  });
};

reducers[ActionTypes.CLEAR_FILTERED_PRODUCTS] = (state, payload) => {
  return Object.assign({}, state, {
    filteredProducts: [],
    currentPage: 0,
    totalPages: 0,
    loading: false
  });
};

reducers[ActionTypes.CLEAR_SEARCH_LIST] = (state, payload) => {
  return Object.assign({}, state, {
    searchList: [],
    currentPage: 0,
    totalPages: 0,
    loading: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
