import React from 'react'

const Card = ({card}) => {
  return (
    <div className='card'>
        <img src={card.imageURL} alt="" />
        <p>Name: {card.name} </p>
        <p>Age: {card.age} </p>
        <p>Gender: {card.gender} </p>
    </div>
  )
}

export default Card