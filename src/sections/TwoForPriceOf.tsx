import React from 'react'
import SmallCard from '../components/SmallCard'
import LgCard from '../components/LgCard'
import { CartItem } from '../models/cartModels'
import { ITwoForPriceOf } from '../models/sectionsModels'

const TwoForPriceOf: React.FC <ITwoForPriceOf> = ({ special, specialTwo }) => {

    return (
        <section className="two-for-price-of ">
            {/* grid 1 */}
            <div id="grid-justify-start">
                <div className="grid-holder" id="grid-holder-first">
                    <div className="grid-1">
                        <LgCard heading="2 FOR USD $29" id="lg-card-1" />
                        {
                            special.map((product: CartItem) => <SmallCard item={product} key={product.item.id} />)
                        }
                    </div>
                </div>
            </div>
            {/* grid 2 */}
            <div id="grid-justify-end">
                <div className="grid-holder" id="grid-holder-second">
                    <div className="grid-2">
                        {
                            specialTwo.map((product: CartItem) => <SmallCard item={product} key={product.item.id} />)
                        }
                        <LgCard heading="2 FOR USD $49" id="lg-card-2" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoForPriceOf