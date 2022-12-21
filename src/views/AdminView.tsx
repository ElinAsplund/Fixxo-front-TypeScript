import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AdminLogInForm from '../sections/AdminLogInForm'
import AdminRegisterForm from '../sections/AdminRegisterForm'

const AdminView: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  document.title='Log In - admin | Fixxo.'

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
      <AdminLogInForm />
      <AdminRegisterForm />
    </>
  )
}

export default AdminView