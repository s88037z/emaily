export const AuthActionType = {
  FETCH_USER: "auth/FETCH_USER",
  FETCH_USER_FAILED: "auth/FETCH_USER_FAILED",
  FETCH_USER_SUCCESS: "auth/FETCH_USER_SUCCESS"
};

export const fetchUser = () => {
  return { type: AuthActionType.FETCH_USER };
};
export const fetchUserSuccess = (res: any) => {
  return { type: AuthActionType.FETCH_USER_SUCCESS, payload: res };
};
export const fetchUserFailed = (err: any) => {
  return { type: AuthActionType.FETCH_USER_FAILED, payload: err };
};
//Steven's approach : use redux-thunk
// export const fetchUser = () => {
// axios.get("/api/current_user")
// };

export default [fetchUser];
