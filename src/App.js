import React, { useState } from 'react'
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Products from './pages/products/products.component';
import CheckOut from './pages/checkout/checkout.component';
import HorizontalLinearStepper from './pages/stepper/stepper.component';
import {Switch, Route } from "react-router-dom";
import { CartContext, CounterContext, TotalContext, ShippingContext } from './config/context'

function App() {
  let count = useState(0)               // Number of items added into cart
  let [cart, setCart] = useState([])    // Array to store the items
  let [total, setTotal] = useState([])
  let [shippingDetails, setShippingDetails] = useState({})
  console.log('cart', cart)

 
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <TotalContext.Provider value={[total, setTotal]}>
        <CounterContext.Provider value={count}>
          <ShippingContext.Provider value={[shippingDetails, setShippingDetails]}>
            <div>
              <Header />
              <br /><br /><br />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path='/products' component={Products} />
                <Route path="/checkout" component={CheckOut} />
                <Route path="/payment" component={HorizontalLinearStepper} />
              </Switch>
            </div>
          </ShippingContext.Provider>
        </CounterContext.Provider>
      </TotalContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
