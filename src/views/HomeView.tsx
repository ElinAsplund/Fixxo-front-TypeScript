import React from 'react'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import HighlightSales from '../sections/HighlightSales'

const HomeView: React.FC = () => {
  document.title='Fixxo.'

  return (
    <>
      <HighlightSales />
    </>
    )
}

export default HomeView