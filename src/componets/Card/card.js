import React from 'react'
import './card.css'
const Card = ({ img, title = '' }) => {
    return (
        <>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center' }}>{title}</h5>
                </div>
            </div>
        </>
    )
}

export default Card