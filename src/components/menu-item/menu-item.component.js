import React from 'react'
import './menu-item.styles.scss'
const MenuItem = ({ item }) => {
  const { name, imageUrl, price, sale } = item
  console.log('itemmmmm', item)
  return (

    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12 menu-item">
        <div className="card p-0 m-2 mt-4">
          <img
            className="card-img-top"
            src={imageUrl}
            alt="Card image cap"
          />
          <div className="card-body p-0 m-0 d-block text-center p-2">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <span className="name d-block">{name}</span>
            <span className="price">${price}</span>
            {/* <p className={sale ? "saleY" : "saleN"}>
              {sale}
            </p> */}
          </div>
          <button className='btn'>Add to Cart</button>
        </div>
      </div>

    </>
  )
}

export default MenuItem