import React, { useState, useContext } from 'react'
import Heading from '../../components/heading/heading.component'
import { CounterContext, CartContext, TotalContext } from '../../config/context'
import { Link } from "react-router-dom"
import Button from '../../components/button/button.component'
import './checkout.styles.scss'

const Checkout = () => {
    let count = useContext(CounterContext);
    let [cart, setCart] = useContext(CartContext);
    let [total, setTotal] = useContext(TotalContext)
    const [, forceRender] = useState({});

    // total
    const sum = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalPrice = Number(sum)
    setTotal(totalPrice)


    // increase quantity 
    const increaseQuantity = (cartItems, ItemtoAdd) => {
        cartItems.map(cartItem =>
            cartItem.id === ItemtoAdd.id
                ?
                setCart[cartItem.quantity++]
                :
                cartItem
        )
        forceRender({});
    }


    // decreae quantity 
    const RemoveItem = (cartItems, cartItemToRemove) => {
        let exsistingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
        if (exsistingCartItem.quantity === 1) {
            count[1](--count[0])
            return setCart(cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id))
        }
        else {
            cartItems.map(cartItem =>
                cartItem.id === cartItemToRemove.id
                    ?
                    setCart[cartItem.quantity--]
                    :
                    cartItem,
            )
        }
        forceRender({});
    }

    // remove product 
    const RemoveProd = (item) => {
        count[1](--count[0])
        setCart(cart.filter((product) => product !== item))
    }

    return (
        <div className='check-out'>
            <br /><br /><br />
            <Heading checkOut />
            <div className="container">
                <>
                    {
                        cart.length ?
                            cart.map((item) => {
                                return (
                                    <div key={item.id} >
                                        <div className="row pb-5 pt-4">
                                            <div className="col-md-1 col-sm-0 col-0"></div>
                                            <div className="col-md-2 col-sm-3 col-3 text-center">
                                                <img
                                                    className="image"
                                                    alt='shoes'
                                                    src={item.imageUrl}
                                                    width="90px"
                                                />
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-2 mt-5 text-center">
                                                <h3 className="name">{item.name} </h3>
                                            </div>
                                            <div className="col-md-2 col-sm-3 col-3 mt-5 text-center">
                                                <button className='btn' onClick={() => (RemoveItem(cart, item))}>&#10094;</button>
                                                <span>{item.quantity}</span>
                                                <button className='btn' onClick={() => increaseQuantity(cart, item)}>&#10095;</button>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-2 mt-5 text-center">
                                                <h2 className="price"> ${item.price * item.quantity} </h2>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-2 mt-5 btn-container text-center">
                                                <button className='removeItem' onClick={() => RemoveProd(item)}>X</button>
                                            </div>
                                            <div className="col-md-1 col-sm-0 col-0"></div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <p>Your cart is empty</p>
                    }
                    {cart.length ?
                        <div>
                            <h1 className="totalPrice">
                                Total Price: <span>${total}</span>
                            </h1><br /><br />
                            <Link to="/payment"><Button floatRight value='Pay Now' /></Link>
                        </div>
                        :
                        null
                    }
                </>
            </div>
        </div>
    )
}

export default Checkout;