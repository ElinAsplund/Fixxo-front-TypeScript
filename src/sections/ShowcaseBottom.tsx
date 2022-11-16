import React from 'react'
import femaleCasual from '../assets/images/female-causal.svg'
import maleWearingJacket from '../assets/images/male-wearing-jacket.svg'

const ShowcaseBottom: React.FC = () => {
  return (
    <section className="showcase-bottom ">
        <div className="content-holder">
            <div className="img-holder bg-brown">
                <img src={femaleCasual} id="showcase-bottom-first" alt="female causally lifting arms up"/>
                <div className="text-holder">
                    <h1>Winter Clearance<br/>Up to 70% Off!</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                    <button className="btn-bg-dark">SHOP NOW</button>
                </div>
            </div>
            <div className="img-holder bg-grey">
                <img src={maleWearingJacket} id="showcase-bottom-second" alt="male wearing a jacket"/>
                <div className="text-holder">
                    <h1>New<br/>Arrivals</h1>
                    <button className="btn-bg-dark">SHOP NOW</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseBottom