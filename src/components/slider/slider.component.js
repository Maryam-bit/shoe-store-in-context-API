import React from 'react'
import './slider.styles.scss'
import Button from '../button/button.component'

const Slider = () => {
    return (
        <div className="main-image">
            <div className="img-content">
                <p>THINKING OF BUYING A SHOES</p>
                <h2>
                    Trending <br /> Shoes
                </h2>
                <Button value='Shop Now'/>
            </div>
        </div>
    )
}

export default Slider;