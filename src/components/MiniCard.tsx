import React from 'react'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../models/productModel'
import { currencyFormatter } from '../utilities/currencyFormatter'

const MiniCard: React.FC <IProduct> = ( {product} ) => {
  return (
    <div className="mini-card">
    <NavLink className="placeholder-area" to={`/products/${product.articleNumber}`} end><img src={product.imageName} /></NavLink>
    <div className="text-holder">
      <h2>{product.category}</h2>
      <NavLink to={`/products/${product.articleNumber}`} className="product-name" end>{product.name}</NavLink>
      <div className="star-holder">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
      </div>
      <p>{currencyFormatter(product.price)}</p>
    </div>
  </div>
  )
}

export default MiniCard