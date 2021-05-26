import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom" //why must as router
import {logger} from 'redux-logger'
import {thunk} from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {factReducer} from "./reducer" //x

// import {aLiteralBiscuit} from 'theStoreAroundTheCorner'
// npm install axios && logger

const store = createStore(factReducer, applyMiddleware(logger,thunk))

ReactDOM.render( // provider>router>app,  
  <React.StrictMode>
      <Provider store={store}> 
        <Router>
          <App />
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
