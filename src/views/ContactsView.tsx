import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'

const ContactsView: React.FC = () => {
    document.title='Contacts | Fixxo.'

  return (
    <>
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Contacts" />
    </>
  )
}

export default ContactsView