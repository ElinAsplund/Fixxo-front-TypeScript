import React from 'react'

interface IMenuIcon {
    icon: string,
    quantity?: number
}

const MenuIcon: React.FC <IMenuIcon> = ({icon, quantity}) => {
  return (
    <button className="menu-icon">
      <div className="badge rounded-pill">{quantity}</div>
      <i className={icon}></i>
    </button>
  )
}

export default MenuIcon