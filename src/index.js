import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { ConnectedRouter , connectRouter, routerMiddleware } from 'connected-react-router';
import App from "./Components/App";
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import rootReducer from './Reducers/index.js';

const browserHistory = createBrowserHistory()



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(browserHistory)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(browserHistory), thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={browserHistory}> 
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
// serviceWorker();
