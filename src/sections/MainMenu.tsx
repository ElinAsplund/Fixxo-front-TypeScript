import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { IMainMenu } from '../models/sectionsModels'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const MainMenu: React.FC<IMainMenu> = ({ className, quantity }) => {
  const [showMenu, setShowMenu] = useState(false)
  const cart = useShoppingCart()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={className} id="mainMenu">
      <nav>
        <NavLink to="/" className="logo-link" end>Fixxo.</NavLink>
        <div className={`nav-links ${showMenu ? "d-grid" : ""}`}>
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/categories" className="nav-link" end>Categories</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
          <NavLink to="/contacts" className="nav-link" end>Contacts</NavLink>
          <NavLink to="/manage_products" className="nav-link" end>Admin</NavLink>
        </div>
        <div className="nav-icons btn-no-corners">
          <MenuIcon icon="fa-regular fa-magnifying-glass" quantity={quantity} />
          <MenuIcon icon="fa-regular fa-code-compare fa-flip-horizontal" quantity={quantity} />
          <MenuIcon icon="fa-regular fa-heart" quantity={quantity} />
          <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <i className="fa-regular fa-bag-shopping"></i>
            <div className="badge rounded-pill">{cart?.cartQuantity}</div>
          </button>
          <button onClick={toggleMenu} className={`menu-icon ${showMenu ? "btn-menu-icon-white" : "btn-menu-icon"}`}><i className='fa-regular fa-bars'></i></button>
        </div>
      </nav>
    </header>
  )
}

export default MainMenu