import React, { useContext } from 'react';
import { CartContext, CounterContext } from '../../config/context';
import './menu-item.styles.scss';

const MenuItem = ({ item }) => {
  const { name, imageUrl, price, sale } = item    // destructure values from item(prop)
  let count = useContext(CounterContext);
  let [cart, setCart] = useContext(CartContext);


  // add to cart
  const addToCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((data) => item.name === data.name)
    if (itemInCart) {
      itemInCart.quantity++;
    }
    else {
      count[1](++count[0]);
      itemInCart = {
        ...item,
        quantity: 1
      }
      newCart.push(itemInCart)
    }
    setCart(newCart)
  }

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12 menu-item">
        <div className="card p-0 m-2 mt-4">
          <img
            className="card-img-top"
            src={imageUrl}
            alt="Card cap"
          />
          <div className="card-body p-0 m-0 d-block text-center p-2">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <span className="name d-block">{name}</span>
            <span className="price">${price}</span>
            <p className={sale ? "saleY" : "saleN"}>
              {sale}
            </p>
          </div>
          <button className={!sale ? "btn" : "btn2"} onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default MenuItem