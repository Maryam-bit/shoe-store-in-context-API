import React, { useState } from 'react'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Products from './pages/products/products.component';
import CheckOut from './pages/checkout/checkout.component'
import { Router, Switch, Route, Link } from "react-router-dom";
import { CartContext, CounterContext } from './config/context'

function App() {
  let count = useState(0)
  let [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <CounterContext.Provider value={count}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/products' component={Products} />
            <Route path="/checkout" component={CheckOut} />
          </Switch>
        </div>
      </CounterContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
