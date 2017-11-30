const reducers = {};
import { ActionTypes, Actions } from '../actions/checkout';
const initialState = {
    currentStep: ''
};

reducers[ActionTypes.MOVE_TO_STEP] = (state, payload) => {
  return Object.assign({}, state, {
    currentStep: payload.step,
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
