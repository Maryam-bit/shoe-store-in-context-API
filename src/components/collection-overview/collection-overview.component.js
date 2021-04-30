import React from 'react'
import SHOE_DATA from '../../pages/shoe.data'
import MenuItem from '../menu-item/menu-item.component'

const CollectionOverview = () => {

const collections = Object(SHOE_DATA).length;
console.log(collections)
    return (
        <div>
            <div className="container-fluid my-5">
                <div className="row ml-5 mr-5">
                    {
                        Object(SHOE_DATA).filter((item, idx) => idx<8).map(item => {
                            return (
                                <>
                                    <MenuItem key={item.id} item={item} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionOverview;