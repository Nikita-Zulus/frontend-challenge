import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import { Reducer } from './redux/Reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store = {store}>
    <App />
  </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);


