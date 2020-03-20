import { map, catchError, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ActionsObservable, ofType } from "redux-observable";
import { AnyAction } from "redux";
import {
  AuthActionType,
  fetchUserFailed,
  fetchUserSuccess
} from "../../reducers/auth/authActions";
import { of } from "rxjs";

function fetchUserEpic(action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(AuthActionType.FETCH_USER),
    switchMap(e =>
      ajax("/api/current_user").pipe(
        map(res => fetchUserSuccess(res)),
        catchError(err => of(fetchUserFailed(err)))
      )
    )
  );
}

export default [fetchUserEpic];
