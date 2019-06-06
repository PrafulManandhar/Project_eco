import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
// import './evbodymain.css';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './combineReducer';
import thunk from "redux-thunk";

import './bootstrap/css/open-iconic-bootstrap.min.css';
import  './bootstrap/css/animate.css'
import './bootstrap/css/owl.carousel.min.css';
import './bootstrap/css/owl.theme.default.min.css';
import './bootstrap/css/magnific-popup.css';
import './bootstrap/css/aos.css';
import './bootstrap/css/ionicons.min.css';
import './bootstrap/css/bootstrap-datepicker.css';
import './bootstrap/css/jquery.timepicker.css';
import './bootstrap/css/flaticon.css'
import './bootstrap/css/icomoon.css'
import './bootstrap/css/style.css'
import '../src/login.css'
const middleware=[thunk];
const initialState={};
const store =createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
