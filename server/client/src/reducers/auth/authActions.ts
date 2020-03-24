export const AuthActionType = {
  FETCH_USER: "auth/FETCH_USER",
  FETCH_USER_FAILED: "auth/FETCH_USER_FAILED",
  FETCH_USER_SUCCESS: "auth/FETCH_USER_SUCCESS",
  LOGOUT: "auth/LOGOUT",
  LOGOUT_FAILED: "auth/LOGOUT_FAILED",
  LOGOUT_SUCCESS: "auth/LOGOUT_SUCCESS"
};

export const fetchUser = () => {
  return { type: AuthActionType.FETCH_USER };
};
export const fetchUserSuccess = (payload: any) => {
  return { type: AuthActionType.FETCH_USER_SUCCESS, payload };
};
export const fetchUserFailed = (err: any) => {
  return { type: AuthActionType.FETCH_USER_FAILED, err };
};

export const logout = () => {
  return { type: AuthActionType.LOGOUT };
};
export const logoutSuccess = () => {
  return { type: AuthActionType.LOGOUT_SUCCESS };
};
export const logoutFailed = () => {
  return { type: AuthActionType.LOGOUT_FAILED };
};
export default [fetchUser];
