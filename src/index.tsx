import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./store/reducer"
import { Provider } from "react-redux"


import { CombinedType } from "../src/store/actionCreators"
import { InitialStateType } from "../src/store/reducer"


const store: Store<InitialStateType, CombinedType> & {
  dispatch: DispatchType
} = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
