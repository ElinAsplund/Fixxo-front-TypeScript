import React from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const NotFoundView: React.FC = () => {
    document.title='404 | Fixxo.'

  return (
    <>
    {/* <MainMenu className="bg-white" /> */}
    <div className='page-not-found-holder'>
      <div><img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=900&t=st=1666814554~exp=1666815154~hmac=060485ab25908ceab6bfc791ed8a85b24ca293037171ddfe0e68a3121b8d15c3"/></div>
      <h1>Page Not Found</h1>
    </div>
    {/* <Footer isFixed="fixed-footer" /> */}
  </>
  )
}

export default NotFoundView