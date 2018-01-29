const reducers = {};
import { ActionTypes, Actions } from '../actions/checkout';
const initialState = {
    loadingCard: false,
    confirmPaymentLoading: false
};

reducers[ActionTypes.PROCESS_CARD_DATA] = (state, payload) => {
  return Object.assign({}, state, {
    loadingCard: true,
  });
};

reducers[ActionTypes.PROCESS_CARD_DATA_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    loadingCard: initialState.loadingCard,
  });
};

reducers[ActionTypes.PROCESS_CARD_DATA_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    loadingCard: initialState.loadingCard,
  });
};

reducers[ActionTypes.CONFIRM_PAYMENT] = (state, payload) => {
  return Object.assign({}, state, {
    confirmPaymentLoading: !initialState.confirmPaymentLoading,
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
