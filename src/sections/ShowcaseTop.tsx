import React from 'react'
import { NavLink } from 'react-router-dom'
import female from '../assets/images/showcase-img-1.png'
import femaleHandbag from '../assets/images/showcase-img-2.png'

const ShowcaseTop: React.FC = () => {
  return (
    <section className="showcase-top gradient-grey">
      <div className="content-holder">
        <div className="img-holder"><img src={female} alt="female model sitting on stool"/></div>
          <div className="text-holder">
            <h1>Sale&nbsp;Up<br/>To&nbsp;50%&nbsp;Off</h1>
            <p>Online shopping free home delivery over&nbsp;$100</p>
            <NavLink to={`/products`}end>
              <button className="btn-bg-theme">SHOP NOW</button>
            </NavLink>
          </div>
        <div className="img-holder"><img src={femaleHandbag} alt="female model posing with a handbag"/></div>
      </div>
    </section>
  )
}

export default ShowcaseTop