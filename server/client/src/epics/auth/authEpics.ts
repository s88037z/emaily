import { map, catchError, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ActionsObservable, ofType } from "redux-observable";
import { AnyAction } from "redux";
import {
  AuthActionType,
  fetchUserFailed,
  fetchUserSuccess,
  logoutSuccess,
  logoutFailed
} from "../../reducers/auth/authActions";
import { of } from "rxjs";

function fetchUserEpic(action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(AuthActionType.FETCH_USER),
    switchMap(e =>
      ajax("/api/current_user").pipe(
        map(res => fetchUserSuccess(res.response)),
        catchError(err => of(fetchUserFailed(err)))
      )
    )
  );
}

function logoutEpic(action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(AuthActionType.LOGOUT),
    switchMap(e =>
      ajax("/api/logout").pipe(
        map(res => {
          console.log(res.response, "res from logout success");
          return logoutSuccess();
        }),
        catchError(err => of(logoutFailed()))
      )
    )
  );
}

export default [fetchUserEpic, logoutEpic];
