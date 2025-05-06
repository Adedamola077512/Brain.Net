import React from 'react'
import Header from '../Components/Header'
import OurClient from '../Components/OurClient'
import Design from '../Components/Design'
import Navigation from '../Components/Navigation'
import Studio from '../Components/Studio'
import Map from '../Components/Map'
import Search from '../Components/Search'
import Testimonials from '../Components/Testimonials'
import Vision from '../Components/Vision'
import Data from '../Components/Data'
import Atlas from '../Components/Atlas'
import Faq from '../Components/Faq'
import Ready from '../Components/Ready'
const Home = () => {
  return (
    <div>
        <Header />
        <OurClient />
        <Design />
        <Navigation />
        <Studio />
        <Map />
        <Search />
        <Testimonials/>
        <Vision/>
        <Data/>
        <Atlas/>
        <Faq/>
        <Ready/>
    </div>
  )
}

export default Home