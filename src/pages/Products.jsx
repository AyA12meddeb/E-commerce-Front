import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from '../redux/slices/productSlice'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'


const Products = () => {
  const {isloading, error, products} = useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(GetProducts())
  },[dispatch])
  return (
    <div className='body'>
    {isloading && <p> is loading...</p>}
    <ProductList products={products}/>
    {console.log(error)}
    <Cart/>

    </div>
  )
}

export default Products 