
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import reducer from './reducer';
import amountReducer from './reducer/handleCart';
import thunk from "redux-thunk";
// import handleCart from './handleCart';
const store = configureStore({
    reducer: {product: amountReducer}
 });
export default store;