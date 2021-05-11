import React, { useContext } from 'react'
import logo from '../../assets/loggo.png'
import { Link } from "react-router-dom";
import { CounterContext, CartContext } from '../../config/context'
import Dropdown from '../dropdown/dropdown.component'
import Button from '../button/button.component'
import './header.styles.scss'

const Header = () => {
    let count = useContext(CounterContext)
    let [cart, setCart] = useContext(CartContext)

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow ">
                <Link to='/'><img className="logo ml-3" src={logo} alt='logo' /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto pt-4 mr-2">
                        <Link to='/'>
                            <li className="nav-item active">
                                <p>Home</p>
                            </li>
                        </Link>

                        <Link to='/products'>
                            <li className="nav-item">
                                <p>Products</p>
                            </li>
                        </Link>

                        <li className="nav-item">
                            {/* cart dropdown */}
                            <div className="dropdown m-0 p-0 dropleft">
                                <button className="btn m-0 p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='fa fa-shopping-cart'></i>
                                    <div className="counter">
                                        <p className='count'>{count[0]}</p>
                                    </div>
                                </button>

                                <div className="dropdown-menu mt-4" aria-labelledby="dropdownMenuButton">
                                    <div className='items'>
                                        {
                                            cart.length ? (
                                                cart.map((item) => {
                                                    return (
                                                        <Dropdown key={item.id} item={item} />
                                                    )
                                                })
                                            )
                                                :
                                                <p>Your cart is empty</p>
                                        }
                                    </div>

                                    <div className="dropdown-item bbtn-droopdown">
                                        <div className="moreProd">
                                            <Link to='/checkout'>
                                                <Button value='Go To CheckOut' />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;