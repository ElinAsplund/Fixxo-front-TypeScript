import React from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from '../models/productModel'
import { currencyFormatter } from '../utilities/currencyFormatter'


interface IMiniCard{
  item: Product
}

const MiniCard: React.FC <IMiniCard> = ( {item} ) => {
  return (
    <div className="mini-card">
    <NavLink className="placeholder-area" to={`/products/${item.articleNumber}`} end><img src={item.imageName} /></NavLink>
    <div className="text-holder">
      <h2>{item.category}</h2>
      <NavLink to={`/products/${item.articleNumber}`} className="product-name" end>{item.name}</NavLink>
      <div className="star-holder">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
      </div>
      <p>{currencyFormatter(item.price)}</p>
    </div>
  </div>
  )
}

export default MiniCard