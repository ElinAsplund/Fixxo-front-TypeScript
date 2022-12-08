import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLogInForm from '../sections/AdminLogInForm'

const AdminView: React.FC = () => {
  return (
    <>
        <div style={ { marginTop: "60px" } }></div>
        <AdminLogInForm />
        <NavLink to="/manage_products" end>Manage Products</NavLink>
    </>
  )
}

export default AdminView