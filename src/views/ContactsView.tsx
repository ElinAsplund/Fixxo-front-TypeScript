import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import ContactForm from '../sections/ContactForm'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import Map from "../sections/Map"

const ContactsView: React.FC = () => {
    document.title='Contacts | Fixxo.'

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Contacts" />
      <Map />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView