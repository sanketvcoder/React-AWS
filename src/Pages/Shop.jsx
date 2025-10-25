import React from 'react'
import Hero from '../Components/Hero/Hero'

import Offers from '../Components/Offers/Offer'
import NewCollections from "../Components/NewCollections/NewCollection"

import Footer from '../Components/Footer/Footer'
import Newsletter from '../Components/NewsLetter/NewsLetter'
import Popular from '../Components/Popular/Popular'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Shop