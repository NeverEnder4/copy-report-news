import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Router history={customHistory}>
      <App />
    </Router>
  </SnackbarProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
