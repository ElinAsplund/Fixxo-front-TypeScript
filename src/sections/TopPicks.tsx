import React from 'react'
import femaleUpclose from '../assets/images/female-upclose.svg'
import maleUpclose from '../assets/images/male-upclose.svg'

const TopPicks: React.FC = () => {
  return (
    <section className="top-picks ">
        <div className="content-holder">
            <div className="img-holder bg-dark-brown">
                <img src={femaleUpclose} alt="female face upclose" id="top-pick-img-left"/>
                <div className="text-holder" id="text-holder-left">
                    <h1>Pamela Reif's<br/>Top Picks</h1>
                    <button className="btn-bg-dark">SHOP NOW</button>
                </div>
            </div>
            <div className="img-holder bg-consious-grey">
                <img src={maleUpclose} alt="male face upclose" id="top-pick-img-right"/>
                <div className="text-holder" id="text-holder-right">
                    <h1>Let's Be<br/>Conscious</h1>
                    <button className="btn-bg-white">SHOP NOW</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopPicks