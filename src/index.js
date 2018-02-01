import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";


//Chrome extension running on unsupport browser causes issue.
const availableMiddleware = window.navigator.userAgent.includes("Chrome")
  ? compose(applyMiddleware(thunk), composeWithDevTools())
  : compose(applyMiddleware(thunk));

const store = createStore(reducer, availableMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
