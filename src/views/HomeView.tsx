import ShowcaseTop from '../sections/ShowcaseTop';
import ShowcaseBottom from '../sections/ShowcaseBottom';
import FeaturedProducts from '../sections/FeaturedProducts';
import TopPicks from '../sections/TopPicks';
import OurSpeciality from '../sections/OurSpeciality';
import TwoForPriceOf from '../sections/TwoForPriceOf';
import HighlightSale from '../sections/HighlightSale'
import ChosenCategories from '../sections/ChosenCategories';
import WebshopInfo from '../sections/WebshopInfo';
import React from 'react';
import { useProductContext } from '../contexts/ProductContext'

const HomeView: React.FC = () => {
  document.title = 'Fixxo.'

  const { products, fourProducts, eighthProducts, nineProducts } = useProductContext()


  const debug = () => {
    console.log(products);
    console.log(fourProducts);
    console.log(eighthProducts);
    console.log(nineProducts);
  }


  return (
    <>
      <ShowcaseTop />
      {/* DEBUG BUTTON */}
      {/* <div className='container d-flex justify-content-center align-items-center mb-4 mt-4'><button className='btn-bg-theme' onClick={debug}>PRODUCTS FETCHED?</button></div> */}
      <ShowcaseBottom />
      <FeaturedProducts className="featured-products" title="Featured Products" items={eighthProducts} />
      <TopPicks />
      <OurSpeciality />
      <TwoForPriceOf />
      <HighlightSale />
      <ChosenCategories />
      <WebshopInfo />
    </>
  )
}

export default HomeView