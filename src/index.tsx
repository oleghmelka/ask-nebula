import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { Provider } from "react-redux"


const store: Store<StagesState, StagesAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

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
