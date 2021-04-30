import React from 'react'
import Heading from '../../components/heading/heading.component'
import imgg from '../../assets/shoe.jpg'
import './checkout.styles.scss'
const Checkout = () => {
    return (
        <div className='check-out'>
            <br />
            <br />
            <br />
            <br />
            <h1 className="totalPrice">
                Total Price: <span>$222</span>
            </h1>
            <Heading />
            <div className="container">
                <div className="row pb-5 pt-4">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 text-center">
                        <img
                            className="image"
                            alt='image'
                            src={imgg}
                            width="90px"
                        />
                    </div>
                    <div className="col-md-2 mt-5 text-center">
                        <h3 className="name">shoess </h3>
                    </div>
                    <div className="col-md-2 mt-5 text-center">
                       <span>&#10094;</span>
                       <span>4</span>
                       <span>&#10095;</span>
                    </div>
                    <div className="col-md-2 mt-5 text-center">
                        <h2 className="price"> $222 </h2>
                    </div>
                    <div className="col-md-2 mt-5 btn-container text-center">
                        <button>X</button>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;