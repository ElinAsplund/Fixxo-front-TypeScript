import React from 'react'
import { IMenuIcon } from '../models/sectionsModels'

const MenuIcon: React.FC<IMenuIcon> = ( { icon, quantity } ) => {
  return (
    <button className="menu-icon">
      <div className="badge rounded-pill">{quantity}</div>
      <i className={icon}></i>
    </button>
  )
}

export default MenuIcon