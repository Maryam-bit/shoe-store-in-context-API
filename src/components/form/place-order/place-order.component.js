import React, { useContext } from 'react';
import { Heading2 } from '../../heading/heading.component';
import Button from '../../button/button.component'
import { CounterContext, CartContext, TotalContext, ShippingContext } from '../../../config/context'
import './place-order.styles.scss';


const PlaceOrder = ({ handleNext }) => {
    let [cart, setCart] = useContext(CartContext);
    let [total, setTotal] = useContext(TotalContext);
    let [shippingDetails, setShippingDetails] = useContext(ShippingContext);
    let count = useContext(CounterContext);              // Number of items added into cart

    const { country, address } = shippingDetails;
    console.log('country', country)

    const handleSubmit = () => {
        setCart([]);
        setTotal([]);
        setShippingDetails({})
        console.log('hello world')
        handleNext()
        count[1](count[0] * 0)
    }

    return (
        <div className="place-order-container container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-8 col-md-8">
                    <div className="card shadow">
                        <div className="card-header">
                            <Heading2 placeOrder />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body pl-5 pr-5">
                                {
                                    cart.length ?
                                        cart.map((item) => {
                                            return (
                                                <>
                                                    <div key={item} className="container pl-3 pr-3">
                                                        <div className="row item-row m-2">
                                                            <div className="col-md-1 col-sm-0 col-0"></div>
                                                            <div className="col-md-5 col-sm-5 col-6 mt-3 text-left">
                                                                <span className="name">{item.name}{'\u00A0'}</span>
                                                                <span className='brackets'>(</span><span className='quantity'>{item.quantity}</span><span className='brackets'>)</span>
                                                            </div>
                                                            <div className="col-md-5 col-sm-5 col-6 mt-3 text-right">
                                                                <h2 className="price"> ${item.price * item.quantity} </h2>
                                                            </div>
                                                            <div className="col-md-1 col-sm-0 col-0"></div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                        :
                                        <p className='message'>Your cart is empty</p>
                                }
                                <hr />
                                {cart.length ?
                                    <div>
                                        <h1 className="totalPrice">
                                            Total Price: <span>${total}</span>
                                        </h1><br />
                                    </div>
                                    :
                                    null
                                }
                                <div className="shipping-details  ml-5 mr-5 p-4">
                                    <h2>Shipping Details</h2>
                                    <span className='title'>Dilivery: </span><span className='text'>Free</span>
                                    <br />
                                    <span className='title'>Address: </span><span className='text'>{address}</span>
                                </div>
                                <div className="btn-container text-center mt-3">
                                    <Button value='Place Order' type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>

            </div>
        </div>
    );
};

export default PlaceOrder;
