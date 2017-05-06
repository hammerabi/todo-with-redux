import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
  document.getElementById('app')
);
