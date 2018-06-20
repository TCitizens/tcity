import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactModal from 'react-modal';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import {  configureStore, history } from './store/store';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactModal.setAppElement(document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    // const NextApp = require('./components/app').default;
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
  window.store = store;
}

registerServiceWorker();