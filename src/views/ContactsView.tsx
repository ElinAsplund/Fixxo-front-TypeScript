import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import ContactForm from '../sections/ContactForm'
import Map from "../sections/Map"

const ContactsView: React.FC = () => {
    document.title='Contacts | Fixxo.'

  return (
    <>
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Contacts" />
      <Map />
      <ContactForm />
    </>
  )
}

export default ContactsView