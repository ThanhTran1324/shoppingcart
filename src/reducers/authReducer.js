import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
  isAnonymous: false
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        isAnonymous: action.payload.isAnonymous,
        userId: action.payload.userId
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, isAnonymous: false, userId: null };
    default:
      return state;
  }
};
