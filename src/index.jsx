import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index'
import createSagaMiddleare from 'redux-saga'
import hello from './saga'
const sagaMiddleare = createSagaMiddleare()
const store = createStore(reducer, applyMiddleware(sagaMiddleare))
sagaMiddleare.run(hello)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
