import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NotFoundView: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  document.title='404 | Fixxo.'

  return (
    <>
      <div className='page-not-found-holder'>
        <div><img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=900&t=st=1666814554~exp=1666815154~hmac=060485ab25908ceab6bfc791ed8a85b24ca293037171ddfe0e68a3121b8d15c3" alt="illustration of girl on the look out and also peeking out of a big 404-number" /></div>
        <h1>Page Not Found</h1>
      </div>
    </>
  )
}

export default NotFoundView