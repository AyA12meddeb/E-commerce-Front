import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCartCard from './ProductCartCard'
import { CreateOrder } from '../redux/slices/orderSlices'




const Cart = () => {
  const{products} = useSelector(state=>state.cart)
  const dispatch=useDispatch()
  return (
    <div>
      {products.map((product)=> <ProductCartCard product={product}/>)}
      <button onClick={()=>dispatch(CreateOrder({ProductList:products}))}>Checkout</button>
    </div>
  )
}

export default Cart
