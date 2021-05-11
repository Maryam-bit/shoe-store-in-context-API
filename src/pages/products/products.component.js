import React from 'react'
import SHOE_DATA from '../../pages/shoe.data'
import MenuItem from '../../components/menu-item/menu-item.component'
import Heading from '../../components/heading/heading.component'

const Products = () => {
    return (
        <div>
            <div className="container-fluid my-5 pt-3">
                <Heading trendingShoes/><br />

                <div className="row ml-5 mr-5">
                    {SHOE_DATA.map(item => {        // map through all shoe collections
                        return (
                                <MenuItem key={item.id} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products;