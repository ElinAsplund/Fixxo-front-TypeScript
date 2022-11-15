import React from 'react'

const OurSpeciality: React.FC = () => {
  return (
    <section className="our-speciality ">
        <div className="speciality-holder">
            <h2>Our Speciality</h2>
            <div className="card-holder">
                <div className="special-card">
                    <div className="text-holder">
                        <p>Track Your Order</p>
                        <a href="#">Get Started <i className="fa-regular fa-chevron-right"></i></a>
                    </div>
                    <div className="placeholder-area"></div>
                </div>
                <div className="special-card">
                    <div className="text-holder">
                        <p>Make a Return</p>
                        <a href="#">Get Started <i className="fa-regular fa-chevron-right"></i></a>
                    </div>
                    <div className="placeholder-area"></div>
                </div>
                <div className="special-card">
                    <div className="text-holder">
                        <p>Request a Price Adjustment</p>
                        <a href="#">Get Started <i className="fa-regular fa-chevron-right"></i></a>
                    </div>
                    <div className="placeholder-area"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurSpeciality