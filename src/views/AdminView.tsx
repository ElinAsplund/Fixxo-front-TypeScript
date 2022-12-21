import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AdminLogInForm from '../sections/AdminLogInForm'
import AdminRegisterForm from '../sections/AdminRegisterForm'

const AdminView: React.FC = () => {
  const { pathname } = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  document.title='Log In - admin | Fixxo.'
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return isAuthenticated ? (
    <>
      <Navigate to="/manage_products" replace />
    </>
  )
  : (
    <>
      <div className='container d-flex align-items-start small-views'>
        <AdminLogInForm />
        <AdminRegisterForm />
      </div>
    </>
  )
}

export default AdminView