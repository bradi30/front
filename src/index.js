import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./js/component/App";
import reportWebVitals from "./reportWebVitals";
import "./i18nextConf";
import configureStore from "./store/configureStore";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    
      <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
