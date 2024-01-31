import React from 'react'

import BannerCourosel from '../components/banner/BannerCourosel'
import TopDiscount from '../components/common/TopDiscount'

import HomePageMainSection from '../components/main-section/HomePageMainSection'
const Home = () => {
  return (
    <div className='main-section'>
      
      <BannerCourosel />

   
       <HomePageMainSection/>
      
    </div>
  )
}

export default Home