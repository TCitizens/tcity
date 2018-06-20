import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactModal from 'react-modal';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore, history } from './store/store';
import App from './components/app';
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

registerServiceWorker();