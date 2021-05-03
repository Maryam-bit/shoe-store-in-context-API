import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react'
import Heading from '../../components/heading/heading.component'
import './checkout.styles.scss'
import { CounterContext, CartContext } from '../../config/context'

const Checkout = () => {
    let count = useContext(CounterContext);
    let [cart, setCart] = useContext(CartContext);
    const [, forceRender] = useState({});


    // total
    const sum = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalPrice = Number(sum)
    console.log('total price', totalPrice)


    // increase quantity 
    const increaseQuantity = (cartItems, ItemtoAdd) => {
        cartItems.map(cartItem =>
            cartItem.id == ItemtoAdd.id
                ?
                setCart[cartItem.quantity++]
                :
                cartItem
        )
        console.log('aaaaaaaaaa', cart.map(a => a.quantity))
        forceRender({});
    }


    // decreae quantity 

    const RemoveItem = (cartItems, cartItemToRemove) => {
        let exsistingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToRemove.id)
        if (exsistingCartItem.quantity == 1) {
            count[1](--count[0])
            return setCart(cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id))
        }
        else {
            cartItems.map(cartItem =>
                cartItem.id == cartItemToRemove.id
                    ?
                    setCart[cartItem.quantity--]
                    :
                    cartItem,
            )
        }
        console.log('quantity andar', cart.map(a => a.quantity))
        forceRender({});
    }
    cart.map(ab => console.log('quantity bahir', ab.quantity))
    console.log('cartttt', cart)


    // remove product 
    const RemoveProd = (item) => {
        count[1](--count[0])
        setCart(cart.filter((product) => product !== item))
    }


    return (
        <div className='check-out'>
            <br /><br /><br /><br />
            <h1 className="totalPrice">
                Total Price: <span>${totalPrice}</span>
            </h1>
            <Heading checkOut/>
            <div className="container">
                {
                    cart.length ?
                cart.map((item) => {
                    return (
                        <div key={item} className="row pb-5 pt-4">
                            <div className="col-md-1"></div>
                            <div className="col-md-2 text-center">
                                <img
                                    className="image"
                                    alt='image'
                                    src={item.imageUrl}
                                    width="90px"
                                />
                            </div>
                            <div className="col-md-2 mt-5 text-center">
                                <h3 className="name">{item.name} </h3>
                            </div>
                            <div className="col-md-2 mt-5 text-center">
                                <button className='btn' onClick={() => (RemoveItem(cart, item))}>&#10094;</button>
                                <span>{item.quantity}</span>
                                <button className='btn' onClick={() => increaseQuantity(cart, item)}>&#10095;</button>
                            </div>
                            <div className="col-md-2 mt-5 text-center">
                                <h2 className="price"> ${item.price*item.quantity} </h2>
                            </div>
                            <div className="col-md-2 mt-5 btn-container text-center">
                                <button className='removeItem' onClick={() => RemoveProd(item)}>X</button>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    )
                })
                :
                <p>Your cart is empty</p>
                }
            </div>
        </div>
    )
}

export default Checkout;