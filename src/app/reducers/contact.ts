const reducers = {};
import { ActionTypes, Actions } from '../actions/contact';
const initialState = {
    loading: false,
    sendSuccess: false
};

reducers[ActionTypes.SEND_MESSAGE] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true,
    sendSuccess: false
  });
};

reducers[ActionTypes.SEND_MESSAGE_FAILURE] = (state, payload) => {
    return Object.assign({}, state, {
      loading: false,
      sendSuccess: false
    });
};

reducers[ActionTypes.SEND_MESSAGE_SUCCESS] = (state, payload) => {
return Object.assign({}, state, {
        loading: false,
        sendSuccess: true
    });
};


export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
