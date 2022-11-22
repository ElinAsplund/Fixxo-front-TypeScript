import React from 'react'
import { NavLink } from 'react-router-dom'
import BreadcrumbLink from '../components/BreadcrumbLink'
import { IBreadcrumb } from '../models/sectionsModels'

// How to declare the component type properly:
// https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu

const Breadcrumb: React.FC<IBreadcrumb> = ({ className, hideOrShowProducts, currentPage }) => {

  return (
    <section className={className}>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/" className="home-icon" end>
              <i className="fa-sharp fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <BreadcrumbLink hideOrShow={hideOrShowProducts} pageBefore="Products" />
          <li>
            <h1>{currentPage}</h1>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb