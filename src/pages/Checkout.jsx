
import React from 'react'
import { useLoaderData } from 'react-router'

const Checkout = () => {
    const {title,price,img}=useLoaderData();
    // console.log(data)
  return (
    <div>
        <img src={img} alt="" />
        <p>{price} $</p>
        <p>name:{title} </p>

    </div>
  )
}

export default Checkout