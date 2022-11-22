import React from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { CartItem } from '../models/cartModels'

interface IMiniCard {
  item: CartItem
}

const MiniCard: React.FC<IMiniCard> = ({ item }) => {
  return (
    <div className="mini-card">
      <NavLink className="placeholder-area" to={`/products/${item.item.articleNumber}`} end><img src={item.item.imageName} /></NavLink>
      <div className="text-holder">
        <h2>{item.item.category}</h2>
        <NavLink to={`/products/${item.item.articleNumber}`} className="product-name" end>{item.item.name}</NavLink>
        <div className="star-holder">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <p>{currencyFormatter(item.item.price)}</p>
      </div>
    </div>
  )
}

export default MiniCard