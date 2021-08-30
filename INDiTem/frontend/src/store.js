//store of redux
import { applyMiddleware, createStore,compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { CartReducers } from './reducers/CartReducers';
import { orderCreateReducer, orderPayReducer } from './reducers/OrderReducers';
import {orderDetailsReducer,} from './reducers/OrderReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
     cart:{
       cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'PayPal',
    },
};
const reducer =combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: CartReducers,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;