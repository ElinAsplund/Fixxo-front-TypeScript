import React from 'react'
import { NavLink } from 'react-router-dom'
import { IBreadcrumbLink } from '../models/sectionsModels'

const BreadcrumbLink: React.FC<IBreadcrumbLink> = ({ hideOrShow, pageBefore }) => {
  return (
    <li className={hideOrShow}>
      <NavLink to={`/${pageBefore.replace(/ /gi, "_").toLowerCase()}`} className="breadcrumb-link" end>
        {pageBefore}
      </NavLink>
    </li>
  )
}

export default BreadcrumbLink