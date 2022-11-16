import React from 'react'
import customerService from '../assets/images/icons/customer-service.svg'
import creditCard from '../assets/images/icons/credit-card.svg'
import deliveryTruck from '../assets/images/icons/delivery-truck.svg'

const WebshopInfo: React.FC = () => {
  return (
    <section className="webshop-info ">
        <div className="container">
            <div className="content-holder">
                <div className="circle">
                    <img src={customerService} alt="customer talking in a phone"/>
                </div>
                <h2>Customer Support</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="content-holder">
                <div className="circle">
                    <img src={creditCard} alt="credit card making a secure transaction"/>
                </div>
                <h2>Secured Payment</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="content-holder">
                <div className="circle">
                    <img src={deliveryTruck} alt="delivery truck"/>
                </div>
                <h2>Free Home Delivery</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="content-holder">
                <div className="circle">
                    <img src={deliveryTruck} alt="delivery truck"/>
                </div>
                <h2>30 Day Reuters</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default WebshopInfo