import React from 'react'
import "./Card.css";

const Card = ({advice,handleClick}) => {
    return (
        <div className="card">
             <h2>{advice}</h2>
             <button className="button" onClick={handleClick}>
                 <span>Give Me Advice!</span>
             </button>
        </div>
    )
}

export default Card
