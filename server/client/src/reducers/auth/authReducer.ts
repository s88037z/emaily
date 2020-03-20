import { AnyAction } from "redux";
import { AuthActionType } from "./authActions";

export interface AuthState {
  user: { _id: string; googleId: string; _v: number } | {};
}
export const authInitState: AuthState = {
  user: {}
};
export default function(state = {}, action: AnyAction) {
  switch (action.type) {
    case AuthActionType.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload.response };
    default:
      return state;
  }
}
