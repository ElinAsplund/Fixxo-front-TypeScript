import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import ShowcaseTop from '../sections/ShowcaseTop';
import ShowcaseBottom from '../sections/ShowcaseBottom';
import FeaturedProducts from '../sections/FeaturedProducts';
import TopPicks from '../sections/TopPicks';
import OurSpeciality from '../sections/OurSpeciality';
import TwoForPriceOf from '../sections/TwoForPriceOf';
import HighlightSale from '../sections/HighlightSale'
import ChosenCategories from '../sections/ChosenCategories';
import WebshopInfo from '../sections/WebshopInfo';
import Footer from '../sections/Footer';
import MainMenu from '../sections/MainMenu';
import React, { useContext } from 'react';
// import { EighthProductsContext } from '../contexts/contexts'

const HomeView: React.FC = () => {
  document.title='Fixxo.'

  return (
    <>
      <MainMenu className="gradient-grey" />
      <ShowcaseTop />
      <ShowcaseBottom />
      {/* <FeaturedProducts className="featured-products" title="Featured Products" items={eighthProductsContext} /> */}
      <TopPicks />
      <OurSpeciality />
      <TwoForPriceOf />
      <HighlightSale />
      <ChosenCategories />
      <WebshopInfo />
      <Footer />
    </>
    )
}

export default HomeView