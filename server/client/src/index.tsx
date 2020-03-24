import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import App from "./components/App";
import rootReducer from "./reducers";
import { AuthState } from "./reducers/auth/authReducer";
import rootEpic from "./epics";
// import { AuthActionType } from "./reducers/auth/authActions";

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(...middleware);
  }
  return applyMiddleware(...middleware, logger);
};

export interface StoreState {
  auth: AuthState;
}

//createStore(reducer, [preloadedState], [enhancer])
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  undefined,
  bindMiddleware([epicMiddleware])
);
epicMiddleware.run(rootEpic);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
