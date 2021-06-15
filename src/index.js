import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import{Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSaGaMiddleware from "redux-saga";
import rootReducer, {rootSaga} from "./modules";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware =createSaGaMiddleware();
const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);



// const store=createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <App />
  </BrowserRouter>,
</Provider>,
  document.getElementById('root')
);

