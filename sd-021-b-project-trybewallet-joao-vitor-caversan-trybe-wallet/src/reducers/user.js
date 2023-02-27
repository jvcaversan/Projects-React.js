import { CHANGE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  if (action.type === CHANGE_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }
  return state;
};

export default user;
