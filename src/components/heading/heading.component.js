import React from 'react'
import './heading.styles.scss'

const Heading = ({ checkOut }) => {
    return (
        <div className="heading">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            {checkOut
                ?
                <h2><span>Y</span><span className="o">O</span>UR <span className='ml-1'>C</span><span className="o"> A</span>RT</h2>
                :
                <h2><span>T</span> RENDING <span>S</span> H<span className="o">O</span>ES</h2>
            }

            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
    )
}

export default Heading;