import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppContainer from './components/app/appContainer';
import store from './store';

import './index.module.css';

ReactDOM.render(
<Provider store={store}>
  <AppContainer />
</Provider>,
 document.getElementById('root'));
