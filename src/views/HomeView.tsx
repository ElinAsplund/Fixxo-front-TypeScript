import React from 'react'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import HighlightSale from '../sections/HighlightSale'

const HomeView: React.FC = () => {
  document.title='Fixxo.'

  return (
    <>
      <HighlightSale />
    </>
    )
}

export default HomeView