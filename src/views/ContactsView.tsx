import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumb from '../sections/Breadcrumb'
import ContactForm from '../sections/ContactForm'
import Map from "../sections/Map"

const ContactsView: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
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