import React from 'react'
import './dropdown.styles.scss'

const Dropdown = ({ item }) => {
    const { name, imageUrl, price, id, quantity } = item
    return (
        <div className="dropdown-item">
            <div className="image">
                <img src={imageUrl} />
            </div>
            <div className="details">
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default Dropdown;