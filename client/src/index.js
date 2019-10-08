import "./Assets/scss/material-kit-react.scss?v=1.8.0";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import {store, persistor} from "./redux/store";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hist}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Router>
    </Provider>,
  document.getElementById("root")
);
