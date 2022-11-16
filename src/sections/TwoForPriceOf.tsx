import React, { useContext }  from 'react'
import SmallCard from '../components/SmallCard'
import LgCard from '../components/LgCard'
// import { FourProductsContext } from '../contexts/contexts'

const TwoForPriceOf: React.FC = () => {
    // const products = useContext(FourProductsContext)

  return (
    <section className="two-for-price-of ">
        {/* grid 1 */}
        <div id="grid-justify-start">
            <div className="grid-holder" id="grid-holder-first">
                <div className="grid-1">
                    <LgCard heading="2 FOR USD $29" id="lg-card-1"/>
                    {
                        // products.map(product => <SmallCard item={product} key={product.articleNumber} />)
                    } 
                </div>
            </div>
        </div>
        {/* grid 2 */}
        <div id="grid-justify-end">
            <div className="grid-holder" id="grid-holder-second">
                <div className="grid-2">
                    {
                        // products.map(product => <SmallCard item={product} key={product.articleNumber} />)
                    } 
                    <LgCard heading="2 FOR USD $49" id="lg-card-2"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TwoForPriceOf