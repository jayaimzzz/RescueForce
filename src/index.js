import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import * as serviceWorker from "./serviceWorker";

import App from "./Components/App";
// import rootReducer from "./Reducers";
import store, { history } from "./configureStore";

//const store = createStore(rootReducer, applyMiddleware(thunk));

const Index = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={App} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </Fragment>
    </ConnectedRouter>
  </Provider>
);


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
