import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './config/configureStore';
import Routes from './config/routes';
//wait until store is rehydrated (to skip multiple renders)
async function init() {
  const store = await configureStore();
  ReactDOM.render(
    <Provider store={store}>
    <Routes/>
  </Provider>, document.getElementById('root'));
}
init();
