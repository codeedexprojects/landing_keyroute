import React from 'react'
import Header from '../Components/Header'
import KeyrouteHeroSection from '../Components/Home/Section1'
import KeyRouteAboutSection from '../Components/Home/Section3'
import Section4 from '../Components/Home/Section4'
import KeyRouteApp from '../Components/Home/Section2'

function Home() {
  return (
    <div>
        <Header></Header>
        <div className='mt-20'><KeyrouteHeroSection></KeyrouteHeroSection></div>
        <div><KeyRouteApp></KeyRouteApp></div>
        <div><KeyRouteAboutSection></KeyRouteAboutSection></div>
        <div><Section4></Section4></div>
    </div>
  )
}

export default Home