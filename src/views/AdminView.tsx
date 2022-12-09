import React from 'react'
import AdminLogInForm from '../sections/AdminLogInForm'
import AdminRegisterForm from '../sections/AdminRegisterForm'

const AdminView: React.FC = () => {
  return (
    <>
        <AdminLogInForm />
        <AdminRegisterForm />
    </>
  )
}

export default AdminView