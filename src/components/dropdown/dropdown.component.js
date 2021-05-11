import React from 'react';

const Dropdown = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className="dropdown-item">
            <div className="image">
                <img src={imageUrl} alt='shoes'/>
            </div>
            <div className="details">
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default Dropdown;