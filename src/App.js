import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Products from './pages/products/products.component';
import CheckOut from './pages/checkout/checkout.component'
import {Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path='/products' component={Products} />
        <Route path="/checkout" component={CheckOut} />
      </Switch>
    </div>
  );
}

export default App;
