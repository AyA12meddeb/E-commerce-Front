import React from 'react'
import { AddToCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import "./productCard.css"

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className='boxCard'>
<div className="container-card">

    <div className="banner-image">
    <img width="400px" src={product.poster} alt='productImg' />
    <p></p> </div>
    <h1 className='titlecard'> {product.name}</h1>
  </div>
  <div className="button-wrapper">
    <button className="btn outline">{product.price}</button>
    <button className="btn fill" onClick={()=>dispatch(AddToCart(product))}>Add to Cart</button>
  </div>
</div>

   


  )
}

export default ProductCard