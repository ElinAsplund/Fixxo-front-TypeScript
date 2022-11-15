import React from 'react'
import { NavLink } from 'react-router-dom'

interface IItemProp {
    articleNumber: string,
    name: string,
    description?: string,
    category: string,
    price: number,
    rating: number,
    imageName: string
}

interface IItem extends IItemProp{
    item: IItemProp
}

const MiniCard: React.FC <IItem> = ( {item} ) => {
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
      {/* <p>{currencyFormatter(item.price)}</p> */}
    </div>
  </div>
  )
}

export default MiniCard