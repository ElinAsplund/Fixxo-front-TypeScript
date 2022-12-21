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
import { useProductContext } from '../contexts/ProductTagContext'
import { useLocation } from 'react-router-dom';

const HomeView: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  document.title = 'Fixxo.'

  const { featured, getFeatured, theRemains, getTheRemains, special, getSpecial, specialTwo, getSpecialTwo } = useProductContext()

  useEffect(() => {
    getFeatured(8)
    getSpecial(4)
    getSpecialTwo(4)
    getTheRemains(9)
  }, [])

  return (
    <>
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts className="featured-products" title="Featured Products" items={featured} />
      <TopPicks />
      <OurSpeciality />
      <TwoForPriceOf special={special} specialTwo={specialTwo} />
      <HighlightSale />
      <ChosenCategories items={theRemains} />
      <WebshopInfo />
    </>
  )
}

export default HomeView