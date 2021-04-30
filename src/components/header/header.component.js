import React from 'react'
import logo from '../../assets/loggo.png'
import './header.styles.scss'
import { Link } from "react-router-dom";
import shoeImage from '../../assets/shoe.jpg'

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow ">
                <img className="logo ml-3" src={logo} />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto pt-4 mr-2">
                        <Link to='/'>
                            <li class="nav-item active">
                                <p>Home</p>
                            </li>
                        </Link>

                        <Link to='/products'>
                            <li class="nav-item">
                                <p>Products</p>
                            </li>
                        </Link>

                        <li className="nav-item">
                            <div class="dropdown m-0 p-0 dropleft">
                                <button class="btn m-0 p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='fa fa-shopping-cart'></i>
                                    <div className="counter">
                                        <p className='count'>1</p>
                                    </div>
                                </button>

                                <div class="dropdown-menu mt-4" aria-labelledby="dropdownMenuButton">
                                    <div className='items'>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="image">
                                                <img src={shoeImage} />
                                            </div>
                                            <div className="details">
                                                <span className='name'>Brown shoes</span>
                                                <span className='price'>1 X $22</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-item bbtn-droopdown">
                                        <div className="moreProd">
                                            <Link to='/checkout'>
                                                <button>Go To CheckOut</button>
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