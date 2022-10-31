import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
// import handleCart from './redux/reducer/handleCart';
import App from './App';
import Home from "./component/home";
import Product from "./component/Product";
import Products from "./component/Products";
import {Provider} from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/font-awesome/css/font-awesome.min.css";
// const store =createStore(handleCart);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Products/:id" element={<Product />} />
      </Routes>
      {/* <App /> */}
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
