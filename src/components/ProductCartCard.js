import React from 'react'



const ProductCartCard = ({product}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
       <h3>{product.name}</h3>
      <img width="40%" src={product.poster} alt='productImg' />
      <p>{product.price}</p>
      <button>delete</button>
    </div>
  )
}

export default ProductCartCard