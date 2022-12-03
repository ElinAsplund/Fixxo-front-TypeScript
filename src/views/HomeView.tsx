import ShowcaseTop from '../sections/ShowcaseTop';
import ShowcaseBottom from '../sections/ShowcaseBottom';
import FeaturedProducts from '../sections/FeaturedProducts';
import TopPicks from '../sections/TopPicks';
import OurSpeciality from '../sections/OurSpeciality';
import TwoForPriceOf from '../sections/TwoForPriceOf';
import HighlightSale from '../sections/HighlightSale'
import ChosenCategories from '../sections/ChosenCategories';
import WebshopInfo from '../sections/WebshopInfo';
import React, { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext'
import { useLocation } from 'react-router-dom';

const HomeView: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  document.title = 'Fixxo.'

  const { getFeatured, featured } = useProductContext()

  useEffect(() => {
    getFeatured(8)
  }, [])


  return (
    <>
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts className="featured-products" title="Featured Products" items={featured} />
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