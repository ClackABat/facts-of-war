import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {ThemeProvider} from '@material-ui/core'

import App from './App';
import './App.scss';
import rootReducer from './store/reducers';
import theme from "./theme/theme"

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose,
  ),
);

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
