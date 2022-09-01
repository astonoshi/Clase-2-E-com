import React from 'react'
import ItemCount from './ItemCount'


export default function Item(props) {
  return (
    <>
      <div classname="conntainer">
        <div className='productCard'>
          <h3 className='productName'>{props.name}</h3>
          <img className='img' src={props.image} alt="images" />
          <p className='productDescription'>{props.description}</p>
          <p className='productPrice'>{props.price}</p>
          <ItemCount stock={props.stock} min={props.min} />
        </div>
      </div>
    </>
  )
}














