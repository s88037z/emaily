import { AnyAction } from "redux";
import { AuthActionType } from "./authActions";

export interface User {
  _id: string;
  googleId: string;
  _v: number;
}

export interface AuthState {
  user: User | null;
}
export const authInitState: AuthState = {
  user: null
};
export default function(state = authInitState, action: AnyAction) {
  switch (action.type) {
    case AuthActionType.FETCH_USER_SUCCESS:
      if (action.payload) {
        return { ...state, user: action.payload };
      }
      return { ...state, user: false };

    case AuthActionType.LOGOUT_SUCCESS:
      return { ...state, user: false };
    default:
      return state;
  }
}
