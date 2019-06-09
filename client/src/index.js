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
import '../src/bootstrap/css/sb-admin-2.min.css'
import '../src/bootstrap/vendor/fontawesome-free/css/all.min.css'
import '../src/contactpagestyle/vendor/bootstrap/css/bootstrap.min.css'
// import './Bootstrap/css/sb-admin-2.min.css'
// import './Bootstrap/vendor/fontawesome-free/css/all.min.css';
// ===-->
// 	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
// <!--===============================================================================================-->
// 	<link rel="stylesheet" type="text/css" href="css/util.css">
// 	<link rel="stylesheet" type="text/css" href="css/main.css">
// <!--===============================================================================================-->

import '../src/card.css'
import '../src/ServicePageCss/style.css'
import '../src/ServicePageCss/theme-pricing.css'
import '../src/ServicePageCss/theme.css'
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
