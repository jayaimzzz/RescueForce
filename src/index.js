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

ReactDOM.render(<Index store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
