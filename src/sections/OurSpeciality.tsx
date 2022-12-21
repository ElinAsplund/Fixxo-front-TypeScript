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
                    <div className="placeholder-area"><img src="https://images.pexels.com/photos/4219155/pexels-photo-4219155.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="writing a note on a piece of paper"/></div>
                </div>
                <div className="special-card">
                    <div className="text-holder">
                        <p>Make a Return</p>
                        <a href="#">Get Started <i className="fa-regular fa-chevron-right"></i></a>
                    </div>
                    <div className="placeholder-area"><img src="https://images.pexels.com/photos/6348097/pexels-photo-6348097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="two packages to be returned"/></div>
                </div>
                <div className="special-card">
                    <div className="text-holder">
                        <p>Request a Price Adjustment</p>
                        <a href="#">Get Started <i className="fa-regular fa-chevron-right"></i></a>
                    </div>
                    <div className="placeholder-area"><img src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="a piggybank"/></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurSpeciality