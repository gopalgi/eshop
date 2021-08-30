import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route} from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import OrderScreen from './Screens/OrderScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import SigninScreen from './Screens/SigninScreens';


function App() {

    const cart = useSelector((state) => state.cart);
    const {cartItems} =cart;

    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
      <BrowserRouter>
    <div className="grid-container">

        <header className="row">
        <div>
            <Link className="brand" to="/">INDiTem</Link>
        </div>
        <div>
            <Link style={{color:'white',marginRight:'35px'}}to="/cart">
                 Cart
            {cartItems.length > 0 && (
                <span className="badge" style={{marginLeft:'5px'}}>{cartItems.length}</span>
            )}
            </Link>
            { userInfo ? (
              <div className="dropdown">
                <Link style={{color:'white',marginRight:'35px'}} to="#">
                  {userInfo.name} <i className="fa fa-caret-down"> </i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link style={{color:'white',marginRight:'35px'}} to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
                  <Link style={{color:'white',marginRight:'35px'}} to="/signin"> Sign In </Link>
            )}
        </div>
         </header>
     <main>
         <Route path="/cart/:id?" component={CartScreen}></Route>
         <Route path='/product/:id' component={ProductScreen} exact></Route>
         <Route path="/register" component={RegisterScreen}></Route>
         <Route path="/shipping" component={ShippingAddressScreen}></Route>
         <Route path="/payment" component={PaymentMethodScreen}></Route>
         <Route path="/placeorder" component={PlaceOrderScreen}></Route>
         <Route path="/order/:id" component={OrderScreen}></Route>
         <Route path='/signin' component={SigninScreen} exact></Route>
         <Route path='/' component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">
            All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
