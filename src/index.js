import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { Main } from './router/Main'
import store from './store'

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
