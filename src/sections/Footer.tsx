import React from 'react'
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="icon-holder">
        <ExternalLinkIcon link="https://www.facebook.com" icon="fa-brands fa-facebook-f" />
        <ExternalLinkIcon link="https://www.instagram.com" icon="fa-brands fa-instagram" />
        <ExternalLinkIcon link="https://www.twitter.com" icon="fa-brands fa-twitter" />
        <ExternalLinkIcon link="https://www.google.com" icon="fa-brands fa-google" />
        <ExternalLinkIcon link="https://www.linkedin.com" icon="fa-brands fa-linkedin" />
      </div>
      <span>©&nbsp;2022&nbsp;Fixxo. All&nbsp;Rights&nbsp;Reserved</span>
    </footer>
  )
}

export default Footer