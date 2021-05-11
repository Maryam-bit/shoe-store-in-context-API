import React from 'react'
import './heading.styles.scss'

const Heading = ({ checkOut, personalInformation, trendingShoes }) => {
    return (
        <div className="heading">
            {!personalInformation ?
                <>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    {checkOut ?
                        <h2><span>Y</span><span className="o">O</span>UR <span className='ml-1'>C</span><span className="o"> A</span>RT</h2>
                        :
                        trendingShoes ?
                            <h2><span>T</span> RENDING <span>S</span> H<span className="o">O</span>ES</h2>
                            :
                            null
                    }

                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </>
                :
                <h2><span>P</span> ERSONAL <span>I</span> NF<span className="o">O</span>RMATION</h2>
            }
        </div>
    )
}

export const Heading2 = ({ addressInformation }) => {
    return (
        <div className="heading">
            {
                addressInformation ?
                    <h2><span>A</span> DDRESS <span>I</span> NF<span className="o">O</span>RMATION</h2>
                    :
                    <h2><span>P</span> LACE <span>O</span> R<span className="o">D</span>ER</h2>
            }
        </div>
    )
}
export default Heading;