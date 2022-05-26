import React from 'react'

const Card = (props) => {
  return (
    <div className='cardname'>
        {props.children}

    </div>
  )
}

export default Card;